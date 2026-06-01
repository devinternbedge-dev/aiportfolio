from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings

import ollama
import os
import time

# ==========================================
# Paths
# ==========================================

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)

VECTORSTORE_PATH = os.path.join(
    BASE_DIR,
    "vectorstore"
)

# ==========================================
# Embeddings
# ==========================================

embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

# ==========================================
# Load Vector Store
# ==========================================

vectorstore = FAISS.load_local(
    VECTORSTORE_PATH,
    embeddings,
    allow_dangerous_deserialization=True
)

# ==========================================
# Retriever
# ==========================================

retriever = vectorstore.as_retriever(
    search_type="mmr",
    search_kwargs={
        "k": 4,
        "fetch_k": 10
    }
)

# ==========================================
# Memory
# ==========================================

chat_history = []

MAX_HISTORY = 5

# ==========================================
# Main Function
# ==========================================

def ask_ai(question):

    start_time = time.time()

    global chat_history

    if not question:
        return "Please ask a question."

    # ======================================
    # Small Talk
    # ======================================

    small_talk = [
        "hi",
        "hello",
        "hey",
        "good morning",
        "good evening"
    ]

    if question.lower().strip() in small_talk:
        return "Hello! How can I help you today?"

    # ======================================
    # Retrieval Timing
    # ======================================

    retrieval_start = time.time()

    if any(
        word in question.lower()
        for word in [
            "resume",
            "cv",
            "profile",
            "experience",
            "skills",
            "education"
        ]
    ):

        docs = [
            doc
            for doc in vectorstore.similarity_search(
                "Kartik resume skills experience work history education",
                k=2
            )
        ][:2]

    else:

        docs = retriever.invoke(question)

    print(
        f"\nRETRIEVAL TIME: {time.time() - retrieval_start:.2f} sec"
    )

    print(
        f"Retrieved {len(docs)} documents"
    )

    # ======================================
    # Context
    # ======================================

    context = "\n\n".join(
        [
            doc.page_content[:150]
            for doc in docs
        ]
    )

    # ======================================
    # History
    # ======================================

    history_text = "\n".join(
        [
            f"{msg['role']}: {msg['content']}"
            for msg in chat_history[-10:]
        ]
    )

    # ======================================
    # Prompt
    # ======================================

    prompt = f"""
You are Kartik AI Assistant.

Answer ONLY using the provided context.

Keep answers short.

Maximum 8 lines.

Conversation History:
{history_text}

Context:
{context}

Question:
{question}

Answer:
"""

    # ======================================
    # LLM Timing
    # ======================================

    llm_start = time.time()

    response = ollama.chat(
    model="phi3:mini",
    options={
        "num_predict": 80,
        "temperature": 0.1,
        "num_ctx": 1024
    },
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    print(
        f"LLM TIME: {time.time() - llm_start:.2f} sec"
    )

    answer = response["message"]["content"]

    # ======================================
    # Save Memory
    # ======================================

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

        chat_history = chat_history[
            -MAX_HISTORY * 2:
        ]

    end_time = time.time()

    print(
        f"\nTOTAL RESPONSE TIME: {end_time - start_time:.2f} seconds\n"
    )

    return answer