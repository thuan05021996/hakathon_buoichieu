const { login, addJobs } = require("../controllers/users.controllers")



const userRouter = (app) => {
    app.post("/api/v1/user/login",login)
    // app.get("/api/v1/allJobs", getAllJobs )
}


module.exports = {
    userRouter,
   
}