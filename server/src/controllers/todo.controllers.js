const { addNewTodo, allTodo, dropTodo, updateTodo } = require("../repository/todo.repository");



//  thêm công việc
async function addTodo_1 (req,res) {
   
  const {todoName} = req.body;

  const result = await addNewTodo(todoName)
  // console.log(result,"alooooo");
  res.status(201).json({message:"thêm thành công"})

}
// trả về client danh sách todo
async function listTodo (req,res) {
    const result = await allTodo()
    res.status(200).send(result)
}
// xoá todo
async function removeTodo (req,res){
    const {id} = req.params;
    const result = await dropTodo(id)
    res.status(200).json({message :"xoá thành công"})
}
//  sửa công việc 
async function editingTodo (req,res) {
  
  const {id} = req.params;
  const {todoName} = req.body;
  const result = await updateTodo(id,todoName)
  res.status(200).json({message : "Sửa thành công"})
}
module.exports = {
    addTodo_1,
    listTodo,
    removeTodo,
    editingTodo
  
    
}