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
from langchain.agents import create_agent
from langchain_core.utils.uuid import uuid7
from langgraph.checkpoint.memory import InMemorySaver


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

agent = create_agent(
    model=llm,
    tools=[get_news,get_weather],
    system_prompt="You are a helpful city agent.be concise and accurate",
    checkpointer=InMemorySaver(),
)
config = {"configurable": {"thread_id": str(uuid7())}}

print("City Intelligence || Press exit to end the chat.")

while True:
    user_input = input("you: ")
    if user_input.lower()=="exit":
        break

    result = agent.invoke(
        {"messages": [{"role": "user", "content": user_input}]},
        config=config,
    )

    
    print(result["messages"][-1].content)