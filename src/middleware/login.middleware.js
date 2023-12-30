const jwt = require("jsonwebtoken");
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_NOT_EXISTS,
  PASSWORD_IS_INCORRENT,
  UNAUTHORIZATION,
} = require("../config/error");
const userService = require("../service/user.service");
const md5password = require("../utils/md5-password");

const verifyLogin = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  // 判断用户名和密码是否为空
  if (!username || !password) {
    return ctx.app.emit("error", NAME_OR_PASSWORD_IS_REQUIRED, ctx);
  }
  // 查询该用户是否在数据库中
  const users = await userService.findUserByName(username);
  const user = users[0];
  if (!user) {
    return ctx.app.emit("error", NAME_IS_NOT_EXISTS, ctx);
  }
  // 查询数据库中密码和用户名是否一致
  if (user.password !== md5password(password)) {
    return ctx.app.emit("error", PASSWORD_IS_INCORRENT, ctx);
  }
  // 将user对象保存在ctx中
  ctx.user = user;
  // 执行下一个中间件（颁发令牌）
  await next();
};

// 验证用户是否登录
const verifyAuth = async (ctx, next) => {
  // 获取token
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");

  // 验证token是否有效
  try {
    const result = jwt.verify(token, "PRIVATE_KEY", {
      algorithm: ["HS256"],
    });
    // console.log(result);
    // 将token中的信息保存下来
    ctx.user = result;

    await next();
  } catch (error) {
    ctx.app.emit("error", UNAUTHORIZATION, ctx);
  }
};

module.exports = {
  verifyLogin,
  verifyAuth,
};
