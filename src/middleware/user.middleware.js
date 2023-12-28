const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_ALREADY_EXISTS,
} = require("../config/error");
const userService = require("../service/user.service");
const md5password = require("../utils/md5-password");

const verifyUser = async (ctx, next) => {
  // 验证用户名和密码是否为空
  const { username, password } = ctx.request.body;

  if (!username || !password) {
    return ctx.app.emit("error", NAME_OR_PASSWORD_IS_REQUIRED, ctx);
  }

  // 判断username是否在数据库中存在
  const users = await userService.findUserByName(username);
  console.log(users);

  if (users.length) {
    return ctx.app.emit("error", NAME_IS_ALREADY_EXISTS, ctx);
  }

  // 执行下一个中间件
  await next();
};

// 用户密码加密
const handlePassword = async (ctx, next) => {
  // 取出密码
  const { password } = ctx.request.body;
  // 加密密码并放回
  ctx.request.body.password = md5password(password);

  // 执行下一个中间件
  await next();
};

module.exports = {
  verifyUser,
  handlePassword,
};
