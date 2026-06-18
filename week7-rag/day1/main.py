from dotenv import load_dotenv
load_dotenv()
from langchain_mistralai import ChatMistralAI
from langchain_community.document_loaders import TextLoader
from langchain_core.prompts import ChatPromptTemplate
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings

embedding_model = HuggingFaceEmbeddings(
    model = "BAAI/bge-small-en-v1.5"
)



splitter = RecursiveCharacterTextSplitter(
    separators="",
    chunk_size = 120,
    chunk_overlap = 10
)


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

chunks = splitter.split_documents(doc)
text = [chunk.page_content for chunk in chunks]
embedding = embedding_model.embed_documents(text)

result = template.format_messages(data = doc[0].page_content)




response = model.invoke(result)
# print(response.content)
print(embedding)

