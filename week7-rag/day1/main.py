from dotenv import load_dotenv
load_dotenv()
from langchain_mistralai import ChatMistralAI
from langchain_community.document_loaders import TextLoader
from langchain_core.prompts import ChatPromptTemplate



model = ChatMistralAI(
    model = "mistral-small-latest"
)


data = TextLoader("document_loaders/notes.txt")
doc = data.load()


template = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            "You are a AI that gives me quick summary of the most important points of the document"),
        (
            "human",
            "{data}"
        )
    ]
)


result = template.format_messages(data = doc[0].page_content)




response = model.invoke(result)
print(response.content)