const KoaRouter = require('@koa/router')
const UserController = require('../controller/user.controller')
const { verifyUser, handlePassword } = require('../middleware/user.middleware')

// 创建路由对象
const userRouter = new KoaRouter({ prefix: '/users' })

// 定义路由映射
userRouter.get('/list',(ctx,next) => {
  ctx.body = `users list`
})

// 用户注册接口
userRouter.post('/',verifyUser,handlePassword,UserController.create)

module.exports = userRouter