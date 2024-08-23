from dotenv import load_dotenv
load_dotenv(dotenv_path='../.env.local')
from pinecone import Pinecone, ServerlessSpec
import google.generativeai as genai
import os
import json

# Initialize Pinecone
pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))

# Initialize Gemini
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

# Create a Pinecone index
pc.create_index(
    name="rag",
    dimension=768,
    metric="cosine",
    spec=ServerlessSpec(cloud="aws", region="us-east-1"),
)

# Load the review data
data = json.load(open("reviews.json"))

processed_data = []

# Create embeddings for each review
for review in data["reviews"]:
    response = genai.embed_content(
        model="models/text-embedding-004",
        content=review['review'],
    )
    embedding = response['embedding']
    processed_data.append(
        {
            "values": embedding,
            "id": review["professor"],
            "metadata":{
                "review": review["review"],
                "stars": review["stars"],
                "subject": review["subject"],
            }
        }
    )

# Insert the embeddings into the Pinecone index
index = pc.Index("rag")
upsert_response = index.upsert(
    vectors=processed_data,
    namespace="ns1",
)
print(f"Upserted count: {upsert_response['upserted_count']}")

# Print index statistics
print(index.describe_index_stats())
