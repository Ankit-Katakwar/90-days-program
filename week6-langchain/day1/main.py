from google import genai
client = genai.Client()

response = client.models.generate_content(
    model = "gemini-3.5-flash",
    contents="what quesiton i asked before this do you know ? or remember ?"
)
print(response.text)