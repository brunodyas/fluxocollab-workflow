from fastapi import APIRouter

router = APIRouter(prefix='/api/v1/task_006', tags=['feature'])

@router.get('/status')
def feature_task_006_status():
    return {'ok': True, 'feature': 'Entrega principal Bruno: modelo de dominio, contratos de API e persistencia inicial', 'task': 'task-006'}
