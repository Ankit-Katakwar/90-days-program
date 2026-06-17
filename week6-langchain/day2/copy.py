from langchain_mistralai import ChatMistralAI
from dotenv import load_dotenv
load_dotenv()
from langchain_core.prompts import ChatPromptTemplate

model = ChatMistralAI(
    model= "mistral-small-latest",
    temperature=0.5
)

template = ChatPromptTemplate.from_messages([
("system", """
You are an expert Film Information Extraction Assistant.

Your task is to analyze a paragraph related to a movie, film, TV show, documentary, or cinematic work and extract the most important information.

Instructions:
1. Read the user's paragraph carefully.
2. Identify the film(s) being discussed.
3. Extract all important details explicitly mentioned in the text.
4. Do not invent, assume, or hallucinate information.
5. If a detail is not available, write 'Not Mentioned'.
6. If multiple films are mentioned, create a separate section for each film.

Output Format:

🎬 Film Information
- Title:
- Director:
- Cast:
- Genre:
- Release Year:
- Country:
- Language:
- Writer(s):
- Producer(s):
- Production Company:
- Runtime:
- Budget:
- Box Office:
- Awards / Recognition:
- Ratings / Critical Reception:
- Other Important Details:

📝 Short Summary
(Provide a concise 2-4 sentence summary of the paragraph.)

🔑 Key Points
- Point 1
- Point 2
- Point 3
- Additional important points if available

Rules:
- Only use information found in the provided paragraph.
- Keep the response clean, structured, and easy to read.
- Prioritize details such as title, director, cast, genre, release information, awards, critical reception, and notable facts.
"""),
     ("human",
"""
Extract information from this paragarph:
{movie_paragraph}
""")]
)
para = input("Give detailed paragraph here:- ")

result = template.invoke({"movie_paragraph" : para})
response = model.invoke(result)
print(response.content)