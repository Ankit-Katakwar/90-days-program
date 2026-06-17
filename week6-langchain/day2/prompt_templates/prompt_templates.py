from langchain_mistralai import ChatMistralAI
from dotenv import load_dotenv
load_dotenv()
from pydantic import BaseModel 
from typing import List,Optional 
from langchain_core.output_parsers import PydanticOutputParser
from langchain_core.prompts import ChatPromptTemplate
model = ChatMistralAI(
    model= "mistral-small-latest",
    temperature=0.5
)

class Movie(BaseModel):
    name : str
    director : str
    release_date : Optional[int]
    cast : List[str]
    rating:Optional[float]
    summary:str    
    
schema = PydanticOutputParser(pydantic_object=Movie)


template = ChatPromptTemplate.from_messages([
("system", """
You are an expert Film Information Extraction Assistant.

Your task is to analyze a paragraph related to a movie, film, TV show, documentary, or cinematic work and extract the most important information in points.
This information should be only related to the given {schema} only. also you have to then give me a Short summary

📝 Short Summary
(Provide a concise 2-4 sentence summary of the paragraph.)


Rules:
- Only use information found in the provided paragraph.
- Keep the response clean, structured, and easy to read.
- Prioritize details such as title, director, cast, genre, release information, awards, critical reception, and notable facts.
"""),
     ("human",
"""
Extract information from this paragarph:
{movie_paragraph}
""")])

para = input("Give me your paragraph:-")

result = template.invoke({"movie_paragraph":para,"schema":schema.get_format_instructions()})


response = model.invoke(result)
# movie_fact = schema.parse(response.content)
print(response.content)
