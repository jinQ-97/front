#  database 작업 호출 : CRUD
# 테이블과 연결된 Todo
from repository.models.todo import Todo
from sqlalchemy.orm import Session

# C : insert
def create(todo:Todo, db:Session):
    db.add(todo)
    db.commit()
    