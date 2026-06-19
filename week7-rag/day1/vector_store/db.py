from langchain_core.documents import Document
from langchain_community.vectorstores import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from dotenv import load_dotenv
load_dotenv()



docs = [
    Document(
        page_content="""
Python is a high-level programming language known for its simplicity and readability.
It is widely used in web development, machine learning, data analysis, automation,
and artificial intelligence. Python supports multiple programming paradigms including
object-oriented, procedural, and functional programming.
""",
        metadata={"source": "python_basics"}
    ),

    Document(
        page_content="""
LangChain is an open-source framework designed for building applications powered by
large language models. It provides components such as document loaders, text splitters,
embeddings, vector stores, retrievers, and chains. LangChain is commonly used to build
RAG applications and AI assistants.
""",
        metadata={"source": "langchain_intro"}
    ),

    Document(
        page_content="""
ChromaDB is a vector database used for storing and retrieving embeddings.
It allows developers to perform similarity searches on text, images, and other data.
ChromaDB integrates well with LangChain and is often used in Retrieval-Augmented
Generation systems.
""",
        metadata={"source": "chromadb_info"}
    ),

    Document(
        page_content="""
The Taj Mahal is a white marble mausoleum located in Agra, India.
It was commissioned by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal.
The monument is recognized as a UNESCO World Heritage Site and attracts millions
of tourists every year.
""",
        metadata={"source": "taj_mahal"}
    ),

    Document(
        page_content="""
Machine Learning is a branch of artificial intelligence that enables computers
to learn patterns from data without being explicitly programmed.
Common types of machine learning include supervised learning, unsupervised learning,
and reinforcement learning. Popular libraries include Scikit-learn, TensorFlow,
and PyTorch.
""",
        metadata={"source": "machine_learning"}
    )
]



embedding_model = HuggingFaceEmbeddings(
   model = "BAAI/bge-small-en-v1.5"
)

vectorstore = Chroma.from_documents(
    documents=docs,
    embedding= embedding_model,
    persist_directory= "my_chroma-db"
    )

result = vectorstore.similarity_search("I wanna know anything about computer",k=2)
for r in result:
    print(r.page_content)
    print(r.metadata)
    print("----------------------------------------")


retirvals = vectorstore.as_retriever(search_kwargs={"k": 2})

docs = retirvals.invoke("2 things related to computer.")

for i in docs:
    print(i.page_content)