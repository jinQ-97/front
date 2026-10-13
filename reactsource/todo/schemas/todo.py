from datetime import datetime

from pydantic import BaseModel, PositiveInt, Field, ConfigDict
from pydantic import ValidationError
from typing import Annotated, Literal, List
from annotated_types import Gt,Ge,Le 
from pydantic import StringConstraints

# 화면단 서버단 데이터 주고 받을 때 사용
#  API 요청/응답 데이터 구조


class TodoCreate(BaseModel):
    """
    TODO 입력 요청
    """
    title: str
    completed:bool=False
    important: bool=False

class TodoUpdate(BaseModel):
    """
    TODO 수정 요청
    """
    title: str | None = None
    completed:bool | None = None
    important: bool | None = None

class TodoResponse(TodoCreate):
    """
    TODO 응답
    """
    id:int
    created_at:datetime
    updated_at:datetime

# # todo 1 개 
# class TodoItem(BaseModel):
#     id: int
#     title: str
#     completed:bool
#     important: bool 

# class Todo(BaseModel):
#     # todos:list[TodoItem]    
#     todos:List[TodoItem] 

#     # Swagger/OpenAPI 문서에 보여줄 환경설정
#     model_config = ConfigDict(
#         json_schema_extra = {
#             "example":{
#                 "todos":[
#                     {
#                         "id": 0,
#                         "title": "sample title",
#                         "completed": True,
#                         "important": False
#                     },
#                 ]
#             }
#         }
#     )   