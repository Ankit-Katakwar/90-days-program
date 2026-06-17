from dotenv import load_dotenv

load_dotenv()

from langchain_mistralai import ChatMistralAI

model = ChatMistralAI(model = "ministral-3b-2512")

response = model.invoke("Explain the steps we have learn in generative ai")
print("content = " , response.content)