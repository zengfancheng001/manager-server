const jwt = require("jsonwebtoken");
// const { PRIVATE_KEY } = require("../config/secret");

class LoginController {
  // 颁发令牌
  sign(ctx, next) {
    const { id, username } = ctx.user;

    // 生成令牌
    const token = jwt.sign({ id, username }, "PRIVATE_KEY", {
      expiresIn: 24 * 60 * 60,
      algorithm: "HS256",
    });

    // 返回用户信息
    ctx.body = {
      code: 0,
      message: "登录成功~",
      data: {
        token,
        id,
        username,
      },
    };
  }

  // 验证token
  test(ctx, next) {
    ctx.body = "用户已登录，身份认证通过~";
  }
}

module.exports = new LoginController();
