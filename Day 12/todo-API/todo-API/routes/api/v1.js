// library import
const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs');

const router = express.Router();
const jsonParser = bodyParser.json();


router.route('/todo')
    // list all items
    .get(function (req, res){
        fs.readFile("./data.json", "utf8", (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
            return res.status(200).json(JSON.parse(jsonString));
        });
    })
    // item creation. 
    .post(function (req, res){
        fs.readFile("./data.json", "utf8", (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
            const todo = JSON.parse(jsonString);
            const t = JSON.parse(req.body.todo);
            t.id = (Math.random() + 1).toString(36).substring(2);
            todo.todo.push(t);
            fs.writeFile('./data.json', JSON.stringify(todo), err => {
                if (err) {
                    return res.sendStatus(500);
                } else {
                    return res.status(200).json(todo);
                }
            });
        });
    })
    // item delete.
    .delete(function (req, res){
        const id = req.body.id;
        fs.readFile("./data.json", "utf8", (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
            const todo = JSON.parse(jsonString);
            for (index in todo.todo) {
                if (todo.todo[index].id == id) {
                    todo.todo.splice(index, 1);
                }
            }
            fs.writeFile('./data.json', JSON.stringify(todo), err => {
                if (err) {
                    return res.sendStatus(500);
                } else {
                    return res.sendStatus(204);
                }
            });
        });
    })

router.route('/todo/:id')
    // read todo item 
    .get(function (req, res) {
        const id = req.params.id;
        fs.readFile("./data.json", "utf8", (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
            const todo = JSON.parse(jsonString);
            for (index in todo.todo) {
                if (todo.todo[index].id == id) {
                    return res.status(200).json(todo.todo[index]);
                }
            }
            return res.sendStatus(404);
        });
    })
    .put(function (req, res){
        const id = req.params.id;
        fs.readFile("./data.json", "utf8", (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
            const todo = JSON.parse(jsonString);
            for (index in todo.todo) {
                if (todo.todo[index].id == id) {
                    todo.todo[index] = JSON.parse(req.body.todo);
                    todo.todo[index].id = id;

                    fs.writeFile('./data.json', JSON.stringify(todo), err => {
                        if (err) {
                            return res.sendStatus(500);
                        } else {
                            return res.status(200).json(todo);
                        }
                    });
                }
            }
        });
    })

module.exports = router;