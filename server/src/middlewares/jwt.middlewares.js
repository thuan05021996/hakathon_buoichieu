const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    try {
      // Lấy token
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "Không tìm thấy token" });
      }
      jwt.verify(token, "mã bí mật", (err, decoded) => {
        if (err) {
          if (err.name === "TokenExpiredError") {
            // Nếu token đã hết hạn
            return res.status(401).json({ message: "Token đã hết hạn" });
          } else {
            // Nếu token không hợp lệ
            return res.status(403).json({ message: "Token không hợp lệ" });
          }
        }
        if(decoded.role !=1) {
          return res.status(403).json({
            message : "bạn không có quyền",
            title: "xin chào người dùng"
          })
        }
        next();
      });
    } catch (error) {
      return res.status(500).json({ message: "Server error" });
    }
  };
  module.exports = {
    verifyToken,
  }