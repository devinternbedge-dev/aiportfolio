from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings

import ollama
import os

# =========================
# Paths
# =========================

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

VECTORSTORE_PATH = os.path.join(BASE_DIR, "vectorstore")

# =========================
# Embeddings
# =========================

embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

# =========================
# Load Vector DB
# =========================

vectorstore = FAISS.load_local(
    VECTORSTORE_PATH,
    embeddings,
    allow_dangerous_deserialization=True
)

retriever = vectorstore.as_retriever(
    search_kwargs={"k": 4}
)

# =========================
# Conversation Memory
# =========================

chat_history = []

MAX_HISTORY = 10

# =========================
# Main Function
# =========================

def ask_ai(question):

    if not question:
        return "Please ask a question."



    global chat_history

    docs = retriever.invoke(question)

    context = "\n".join(
        [doc.page_content for doc in docs]
    )

    history_text = "\n".join(
        [
            f"{msg['role']}: {msg['content']}"
            for msg in chat_history
        ]
    )

    prompt = f"""
You are Kartik AI Assistant.

Answer ONLY from the provided context.

Use previous conversation when needed.

If answer is not found in context,
say:

"I could not find that information."

Conversation History:
{history_text}

Context:
{context}

Question:
{question}
"""

    response = ollama.chat(
        model="mistral",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    answer = response["message"]["content"]

    chat_history.append(
        {
            "role": "user",
            "content": question
        }
    )

    chat_history.append(
        {
            "role": "assistant",
            "content": answer
        }
    )

    if len(chat_history) > MAX_HISTORY * 2:
        chat_history = chat_history[-MAX_HISTORY * 2:]

    return answer