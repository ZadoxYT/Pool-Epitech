# todo-API

## How to run
```
# start server
node app.js
```

## How to test
Install [Postman](https://www.getpostman.com/)

## Online Documentation
https://documenter.getpostman.com/view/4326801/UV5XiHS1

## API endpoints

HTTP route prefix : http://localhost:3000/api/v1/

### API endpoints summary
Route     | Method | Description
----------|--------|--------------------
/todo     | GET    | get all items
/todo     | POST   | create items
/todo     | DELETE | delete item
/todo/:id | GET    | get item
/todo/:id | PUT    | update item

### GET http://localhost:3000/api/v1/todo