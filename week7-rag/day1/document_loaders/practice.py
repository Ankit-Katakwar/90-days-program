from langchain_community.document_loaders import WebBaseLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    separators="",
    chunk_size = 150,
    chunk_overlap = 20
)
url = "https://docs.langchain.com/oss/python/integrations/document_loaders/docling"


data = WebBaseLoader(url)
doc = data.load()

chunks = splitter.split_documents(doc)

for i in range(len(chunks)):
    print(f"{i}:{chunks[i]}")
    print("")
    print("")
    print("------------------------------------------------------------")