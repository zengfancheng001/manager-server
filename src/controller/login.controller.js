const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../config/secret");

class LoginController {
  // 颁发令牌
  sign(ctx, next) {
    const { id, username } = ctx.user;
    // 生成令牌

    const token = jwt.sign({ id, username }, "PRIVATE_KEY", {
      expiresIn: 24 * 60 * 60,
      // algorithm: "HS256",
    });
    console.log("token值：", token);

    // 返回用户信息
    ctx.body = {
      code: 0,
      message: "登录成功~",
      data: {
        token: token,
        id: id,
        name: username,
      },
    };
  }
}

module.exports = new LoginController();
