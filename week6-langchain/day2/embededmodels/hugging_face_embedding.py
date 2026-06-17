from langchain_huggingface import HuggingFaceEmbeddings

from dotenv import load_dotenv
load_dotenv()

embedding = HuggingFaceEmbeddings(
    model_name = "BAAI/bge-small-en-v1.5"
)

texts = [
    "My name is ankit katakwar",
    "Hello ji sasriyakal",
    "Im from bhopal"
]

result = embedding.embed_documents(texts)
print(result)
print(result[:10])