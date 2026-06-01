from langchain_text_splitters import RecursiveCharacterTextSplitter

from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS

from langchain_core.documents import Document

import os

# Paths

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DATA_PATH = os.path.join(BASE_DIR, "data")

VECTORSTORE_PATH = os.path.join(BASE_DIR, "vectorstore")

documents = []

# Load TXT Files

for file in os.listdir(DATA_PATH):

    if file.endswith(".txt"):

        file_path = os.path.join(DATA_PATH, file)

        print(f"Loading: {file_path}")

        with open(file_path, "r", encoding="utf-8") as f:

            text = f.read()

            documents.append(
                Document(page_content=text)
            )

print(f"Documents Loaded: {len(documents)}")

# Split Text

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=100
)

docs = text_splitter.split_documents(documents)

print(f"Chunks Created: {len(docs)}")

# Embeddings

embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

# Create Vector DB

vectorstore = FAISS.from_documents(
    docs,
    embeddings
)

# Save

vectorstore.save_local(VECTORSTORE_PATH)

print("Vector DB Created Successfully")