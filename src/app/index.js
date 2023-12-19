const Koa = require('koa')
const userRouter = require('../router/user.router')
const bodyParser = require('koa-bodyparser')
const loginRouter = require('../router/login.router')

const app = new Koa()

app.use(bodyParser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.use(loginRouter.routes())
app.use(userRouter.allowedMethods())

module.exports = app