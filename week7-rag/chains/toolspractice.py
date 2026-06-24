from langchain_tavily import TavilySearch
from langchain_mistralai import ChatMistralAI
from dotenv import load_dotenv 
load_dotenv()
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser



llm = ChatMistralAI(
    model = "mistral-small-latest"
)
tool = TavilySearch(
    max_result = 5
)
parser = StrOutputParser()
chat_template = ChatPromptTemplate.from_template(
    '''
    You are a helpful ai assistance 
    summarise the following news into clear bullet points
    {news}     
    '''
)

chain = chat_template | llm | parser

search_news = tool.run("Give latest news of murder in pune by his fiance before marriage.")


res = chain.invoke({"news":search_news})

print(res)