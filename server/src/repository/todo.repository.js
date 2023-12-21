const database = require("../config/db.config");


// thêm công viêc
async function addNewTodo (todoName) {
    const [result] = await database.execute("INSERT INTO `listtodo` ( `todoName`) VALUES (?)", [todoName])
    return result[0]
}

// lấy dữ liệu của bảng dâtbasse gửi về
async function allTodo () {
    const [result] = await database.execute("SELECT * FROM `listtodo`");
    return result
}
// xoá công việc từ id
async function dropTodo (id) {
    const [result] = await database.execute("DELETE FROM `listtodo` WHERE `listtodo`.`id` = ?", [id])
    return result
}
// sửa công việc
async function updateTodo (id,todoName) {
    const [result] = await database.execute("update `listtodo` set todoName = ? where id = ?",
    [todoName, id]);
    return result
}
module.exports = {
    addNewTodo,
    allTodo,
    dropTodo,
    updateTodo
    
}