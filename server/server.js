const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { userRouter,  } = require("./src/router/users.router");
const { todoRouter } = require("./src/router/todo.routers");

require("dotenv").config();

// cấu hình kết nối

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// đương dẫn router
userRouter(app)

todoRouter(app)


// chạy cổng 
app.listen(process.env.PORT, () => {
    console.log(`ĐANG CHẠY CỔNG ${process.env.PORT}`);
})