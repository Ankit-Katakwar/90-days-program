from langchain_core.prompts import ChatPromptTemplate
from dotenv import load_dotenv
load_dotenv()
from langchain_mistralai import ChatMistralAI
from langchain_core.output_parsers import StrOutputParser


model = ChatMistralAI(
    model = "mistral-small-latest"
)

parser = StrOutputParser()

short_prompt = ChatPromptTemplate([
    ("system","explain the given {topic} in 2 lines only and in easy language.")
    
    
])

detailed_prompt = ChatPromptTemplate.from_messages([
    ("system", "Explain the {topic} in detailed.")
])





topic = input("Give your topic to explian.")

formatted_short_prompt = short_prompt.format_messages(topic = topic)
formatted_detailed_prompt = detailed_prompt.format_messages(topic = topic)

short_response = model.invoke(formatted_short_prompt)
detailed_response = model.invoke(formatted_detailed_prompt)

short_structured = parser.parse(short_response.content)
detailed_structured = parser.parse(detailed_response.content)

print("short answer =" ,short_structured)
print("-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x")
print("detailed answer = ", detailed_structured)
# chains = prompt_template | model | parser

# response = chains.invoke("Whats ai engnnering.")

# print(response)
# prompt = prompt_template.format_prompt(topic = "chains vs runnabels in langchain.")

# response = model.invoke(prompt)

# strOutput = parser.parse(response.content)
# print(strOutput)
