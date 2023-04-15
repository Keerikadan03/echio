from fastapi import FastAPI, Response
from pydantic import ValidationError

api = FastAPI()


@api.get("/")
def ping():
    return {"ping": "pong!"}


from .db import db, db_users
from .db.user import User


@api.get("/auth")
def auth(username: str, password: str):
    assert isinstance(username, str)
    assert isinstance(password, str)
    return_content = {}
    if db_users.find_one({"username": username, "password": password}):
        return Response(status_code=200, content="User authenticated")
    return Response(status_code=400, content="User not authenticated")


@api.get("/register")
def register(username: str, password: str):
    assert isinstance(username, str)
    assert isinstance(password, str)
    if db_users.find_one({"username": username}):
        return Response(status_code=400, content="User already exists")
    try:
        user = User(username=username, password=password)
    except ValidationError as e:
        return Response(status_code=400, content="Error: " + str(e))
    db_users.insert_one(user.dict())
    return Response(status_code=200, content="User created")

@api.get("/users")
def users(limit: int = 10):
    assert isinstance(limit, int)
    return_content = {}
    users = list(db_users.find({}, {"_id": 0}).limit(limit))
    return_content["count"] = len(users)
    return_content["users"] = users
    return return_content

