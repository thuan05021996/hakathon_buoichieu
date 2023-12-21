const { addNewTodo, allTodo } = require("../repository/todo.repository");

const checkNameTodo = async (req, res, next) => {
    const { todoName } = req.body;
    const result = await allTodo(todoName);
   const aa = result.find(item => item.todoName == todoName)
    if (aa) {
      return res.status(400).json({
        message: "Đã có công việc",
      });
    }
    next();
  };
  module.exports = {
    checkNameTodo
  }