from langchain_community.document_loaders import WebBaseLoader

url = "https://docs.langchain.com/oss/python/integrations/document_loaders/docling"

data = WebBaseLoader(url)
doc = data.load()

print(doc)