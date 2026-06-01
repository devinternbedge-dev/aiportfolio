from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.rag import ask_ai

app = FastAPI()

# CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root

@app.get("/")
async def root():

    return {
        "message": "Kartik RAG AI Running"
    }

# Chat Endpoint

@app.post("/chat")
async def chat(data: dict):

    question = data.get("message")

    response = ask_ai(question)

    return {
        "response": response
    }