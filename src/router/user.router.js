const KoaRouter = require("@koa/router");
const UserController = require("../controller/user.controller");
const { verifyUser, handlePassword } = require("../middleware/user.middleware");
const { verifyAuth } = require("../middleware/login.middleware");

// 创建路由对象
const userRouter = new KoaRouter({ prefix: "/users" });

// 用户注册接口
userRouter.post("/", verifyUser, handlePassword, UserController.create);

// 获取用户详细信息接口
userRouter.get("/5", verifyAuth, UserController.getUserInfo);

module.exports = userRouter;
