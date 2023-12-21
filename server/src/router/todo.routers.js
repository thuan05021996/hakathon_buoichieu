const { addTodo_1, listTodo,  removeTodo, editingTodo } = require("../controllers/todo.controllers")
const { checkNameTodo } = require("../middlewares/checkName.middleware")
const { verifyToken } = require("../middlewares/jwt.middlewares")

const todoRouter = (app) => {
    app.post("/api/v1/addtodo",verifyToken,checkNameTodo,addTodo_1)
    app.get("/api/v1/listtodo",listTodo)
    app.delete("/xoa/:id",verifyToken, removeTodo)
    app.put("/update/:id",verifyToken,editingTodo)
}
module.exports = {
    todoRouter
}