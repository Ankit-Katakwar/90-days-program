from langchain.tools import tool
from langchain_mistralai import ChatMistralAI
from dotenv import load_dotenv 
load_dotenv()
from rich import print
from langchain_core.messages import HumanMessage


llm = ChatMistralAI(
    model = "mistral-small-latest"
)
@tool
def text_length(text= str ) -> int:
    """This tool will retun the number of character in the text."""
    return len(text)

tools = {
    "text_length" : text_length
}



message =[]
input = input("You: ")
query = HumanMessage(input)
message.append(query)
llm_with_tool  = llm.bind_tools([text_length])
result = llm_with_tool.invoke(message)
message.append(result)



if result.tool_calls:
    tool_name = result.tool_calls[0]["name"]
    tool_message = tools[tool_name].invoke(result.tool_calls[0])
    message.append(tool_message)    


response = llm_with_tool.invoke(message)

print(response.content)

