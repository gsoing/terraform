# Users api
## List all users
```
GET /v1/users 
```
Answer
```json
 [
     {
         "id": "454354TERGGDFGDF",
         "name": "toto"
     },
    {
         "id": "454354TERGGDFGDF",
         "name": "titi"
     },
 ]
```
## Create User
```
POST /v1/users 
```
Request Body
```json
{
    "name": "DDDDDDD"
}
```
Response Body
```json
{
    "id": "RGGFDGDFGDF",
    "name": "DDDDDDD"
}
```

## Get One user 
```
GET /v1/users/{id}
```
```json
    {
         "id": "454354TERGGDFGDF",
         "name": "titi",
         "answers": [
             "toto",
             "titi"
         ] 
         
     }
```

## Add answers
```
POST /v1/users/{id}/answers
```
Request Body
```json
{
    "answer": "XXXXXXXX"
}
```
Response Body 
```json
{
    "answers": [
        "toto",
        "titi"
    ] 
}
```