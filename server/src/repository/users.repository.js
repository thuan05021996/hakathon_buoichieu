const database = require("../config/db.config")

async function getUserByEmail (email) {
    const [findUser] = await database.execute("select * from users where email = ? ",[email]);
    // console.log(findUser,"1111");
    return findUser[0]
}

module.exports = {
    getUserByEmail
}