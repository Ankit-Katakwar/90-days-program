from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')

sentense1 = "My name is ankit katakwar and I am a coad trader"

embedding1 = model.encode(sentense1)

print(f"Shape: {embedding1.shape}")  
print(f"First 10 numbers: {embedding1[:10]}")


sentence2 = "my father's name is anand katakwar and he is a farmer."
embedding2 = model.encode(sentence2)


similarity = model.similarity(embedding1,embedding2)

print(f"Similarity: {similarity}")

sentence3 = "My mother's name is kalpana katakwar and she is a vice principal"

embedding3 = model.encode(sentence3)

similarity2 = model.similarity(embedding1, embedding3)

print(f"Similarity2: {similarity2}")