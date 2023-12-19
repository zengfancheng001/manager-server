const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_NOT_EXISTS} = require('../config/error')
const userService = require('../service/user.service')

const verifyLogin = async (ctx, next) => {
  const { username, password } = ctx.request.body
  // 判断用户名和密码是否为空
  if (!username || !password) {
    return ctx.app.emit('error',NAME_OR_PASSWORD_IS_REQUIRED,ctx)
  }
  // 查询该用户是否在数据库中
  const users = userService.findUserByName(username)
  const user = users[0]
  if (!user) {
    return ctx.app.emit('error',NAME_IS_NOT_EXISTS,ctx)
  }
  // 查询数据库中密码和用户名是否一致

  // 执行下一个中间件
  await next()
}

module.exports = {
  verifyLogin
}