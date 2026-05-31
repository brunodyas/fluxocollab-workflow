from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pipeline(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    
    adj = {node["id"]: [] for node in pipeline.nodes}
    for edge in pipeline.edges:
        source = edge.get("source")
        target = edge.get("target")
        if source in adj and target in adj:
            adj[source].append(target)
            
    # DFS detect cycle
    # state: 0 = unvisited, 1 = visiting, 2 = visited
    state = {node["id"]: 0 for node in pipeline.nodes}
    
    def has_cycle(u):
        state[u] = 1
        for v in adj[u]:
            if state[v] == 1:
                return True
            if state[v] == 0:
                if has_cycle(v):
                    return True
        state[u] = 2
        return False
        
    is_dag = True
    for node in pipeline.nodes:
        if state[node["id"]] == 0:
            if has_cycle(node["id"]):
                is_dag = False
                break
                
    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
