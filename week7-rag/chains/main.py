# Load every library ------------------------------------------------------------------
from dotenv import load_dotenv
load_dotenv()
from langchain_core.messages import HumanMessage , ToolMessage
from langchain_mistralai import ChatMistralAI
from langchain_core.tools import tool
import os 
from rich import print
import requests
from tavily import TavilyClient


# Making tools  ----------------------------------------------------------------------

@tool
def get_weather(city:str)->str:
    """This will get all the weather data of the city."""
    api_key = os.getenv("OPENWEATHER_API_KEY")
    
    url =(f"https://api.openweathermap.org/data/2.5/weather"
        f"?q={city}&appid={api_key}&units=metric")
    
    response = requests.get(url)
    result = response.json()
    
    
    return f"{city}: {result['main']['temp']}°C"
    


@tool
def get_news(city:str )->str:
    """This gives the news of the city."""
    
    client = TavilyClient(os.getenv("TAVILY_API_KEY"))
    response = client.search(
                            query=f"Latest news in the {city}",
                            search_depth="basic",
                            max_results=4
                             )
    
    result = response.get("results",[])    
    if not result:
        print(f"For now we are unable to fetch the city news.")
    
    news_list = []
    
    for i in result:
        title = i.get("title","No Title")
        url = i.get("url","")
        snippet = i.get("content","No Title")
        news_list.append(
            f"-{title}\n {url}\n {snippet[:100]}..."
        )
    
    return f"Latest news of the {city} are as follows:-\n\n"+"\n\n".join(news_list)
    

# Making models and binding -----------------------------------------------------------


tools = {
    "get_news" : get_news,
    "get_weather":get_weather
}

llm = ChatMistralAI(
    model = "mistral-small-latest"
)

llm_with_tools = llm.bind_tools([get_news,get_weather])
    


message= []

print("City-intellignece tool")
print("Print exit to end the chat ")
    
while True:
    user_input = input("You: ")
    if user_input.lower() == "exit":
        break
    
    message.append(HumanMessage(content=user_input))
    
    while True:
        result = llm_with_tools.invoke(message)
        
        message.append(result)
        if result.tool_calls:
            for tool_call in result.tool_calls:
                tool_name = tool_call["name"]
                tool_id = tool_call["id"]
                conf = input(f"The agent wants to call the {tool_name} press y/n to confirm/cancel.")
                
                if conf.lower() == "n":
                    print("Request cancelled.")
                    break
                
                tool_result = tools[tool_name].invoke(tool_call["args"])
                message.append(ToolMessage(
                    content=tool_result,
                    tool_call_id = tool_id
                ))
            continue    
          
          
        else:    
            print(result.content)
            break

            
                
            

    