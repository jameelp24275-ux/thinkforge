from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def home():
    return {
        "message": "Welcome to ThinkForge Backend!"
    }


@app.get("/health")
def health():
    return {
        "status": "running"
    }