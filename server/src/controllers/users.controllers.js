const jwt = require ("jsonwebtoken");
const { getUserByEmail } = require("../repository/users.repository");

async function login (req,res) {
    console.log(req.body);
    const  {email,password} = req.body;
    
    const result = await getUserByEmail(email);
   
   if(!result){
    return res.status(404).json({message : "Tài khoản không tồn tại "})
   }
   if(result.password !== password){
    return res.status(404).json({message : "Mật khẩu không đúng "})
   }


   const token = jwt.sign({ id: result.userId, role : result.role },"mã bí mật", {
    expiresIn: "20m",
  });
  if(result.role == 1){
      return res.status(200).json({
  
          message : "Admin đăng nhập thành công",
          result :result,
          token
          
      })

  }else{
    return res.status(200).json({
  
        message : "Người dùng đăng nhập thành công",
        result :result,
        token
        
    })
  }
   

}

async function addtodo1 (req,res) {

}

// lấy tất cả công việc 
async function addJobs (req,res) {
    console.log("đã ăn vào đây1111111111");
}
// export 
module.exports = {
    login,
    addJobs
}