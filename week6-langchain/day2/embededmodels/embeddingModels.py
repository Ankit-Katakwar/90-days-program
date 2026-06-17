from langchain_google_genai import GoogleGenerativeAIEmbeddings

from dotenv import load_dotenv
load_dotenv()

embeddings = GoogleGenerativeAIEmbeddings(
    model="gemini-embedding-001",
    dimensions = 64

)
vector = embeddings.embed_query("Hello , I am ankit katakwar.")
print(f"Embeddings are these:- {vector}")
print("\n✅ Success! New generation vector coordinates generated.")
print(f"Total Dimensions (Vector size): {len(vector)}")
print(f"First 5 dimensions: {vector[:5]}")