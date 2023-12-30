const Koa = require("koa");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
const registerRouters = require("../router");
// const userRouter = require("../router/user.router");
// const loginRouter = require("../router/login.router");

const app = new Koa();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser());
// 动态注册路由
registerRouters(app);
// app.use(userRouter.routes());
// app.use(userRouter.allowedMethods());
// app.use(loginRouter.routes());
// app.use(loginRouter.allowedMethods());

module.exports = app;
