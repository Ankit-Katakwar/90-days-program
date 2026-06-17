import os
from langchain_huggingface import ChatHuggingFace, HuggingFacePipeline

print("⏳ Initializing local pipeline and model framework...")

# 1. Setup the underlying Local Pipeline using your exact formatting
# We use the clean, unquantized model to avoid Windows version crashes.
llm = HuggingFacePipeline.from_model_id(
    model_id="Qwen/Qwen2.5-0.5B-Instruct",
    task="text-generation",
    pipeline_kwargs=dict(
        max_new_tokens=512,
        do_sample=False,          # Keeps the output focused and predictable
        repetition_penalty=1.03,  # Prevents the AI from repeating phrases
    )
)

print("⚙️ Wrapping pipeline into the ChatHuggingFace layer...")
# 2. Wrap it inside the Chat structure so it can handle conversation formatting
model = ChatHuggingFace(llm=llm)

print("\n🚀 Model loaded locally! Querying your local processor...")
# 3. Invoke the model exactly like you requested
question = input("Ask me anything related to the computer.")
result = model.invoke(question)

print("\n--- Local AI Response ---")
print(result.content)