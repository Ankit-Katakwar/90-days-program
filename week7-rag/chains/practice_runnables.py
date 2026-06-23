from langchain_core.runnables import RunnableParallel,RunnablePassthrough
from langchain_mistralai import ChatMistralAI
from dotenv import load_dotenv
load_dotenv()
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate

model = ChatMistralAI(
    model = "mistral-small-latest"
)
parser = StrOutputParser()

code_template = ChatPromptTemplate.from_messages([
    ("system", "Give the whole code of the {topic} ")
])
explain_template = ChatPromptTemplate.from_messages([
    ("system","you have to explain the given {code} in very easy language.")
])

seq1 = code_template | model | parser

seq2 = RunnableParallel({
    "code":RunnablePassthrough(),
    "explination":explain_template | model | parser
})

chain = seq1 | seq2

res = chain.invoke("Give a code of pellendrome in py ")
print(res["code"])
print()
print(res["explination"])


