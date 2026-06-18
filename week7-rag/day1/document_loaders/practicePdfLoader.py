from langchain_community.document_loaders import PyPDFLoader

file_path = ""
data = PyPDFLoader(file_path)
doc = data.load()

print(doc)