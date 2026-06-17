from dotenv import load_dotenv
from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint

load_dotenv()

print("⏳ Connecting to Hugging Face Endpoint...")

try:

    llm = HuggingFaceEndpoint(
        repo_id="meta-llama/Meta-Llama-3-8B-Instruct",
        timeout=120,
        temperature=0.7
    )
    model = ChatHuggingFace(llm=llm)

    print("🚀 Sending prompt to TinyLlama...")
    response = model.invoke("Who are you.")
    print("\n--- AI Response ---")
    print(response.content)
except Exception as err:
    print(f"There is an error as:{err}")