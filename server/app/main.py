from fastapi import FastAPI
from app.routes.feature_task_013 import router as feature_router

app = FastAPI(title='factory-app')
app.include_router(feature_router)

@app.get('/health')
def health():
    return {'ok': True}
