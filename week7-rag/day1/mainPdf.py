from dotenv import load_dotenv
load_dotenv()
from langchain_mistralai import ChatMistralAI

model = ChatMistralAI(
    model = "mistral-small-latest",
    temperature=0.5
)
from langchain_core.prompts import ChatPromptTemplate
from langchain_community.document_loaders import PyPDFLoader
data = PyPDFLoader("document_loaders/pythonBOOK.pdf")
docs = data.load()
template = ChatPromptTemplate.from_messages([
    ("system","You are a AI pdf reader who summarise the pds's important part and give response in little summary so that it will be helpful for the user to understand big explinations into little summary."),
    ("human","{data}")
    
])

result = template.format_messages(data=docs)

response = model.invoke(result)

print(response.content)

