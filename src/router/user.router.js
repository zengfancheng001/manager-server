const KoaRouter = require("@koa/router");
const UserController = require("../controller/user.controller");
const { verifyUser, handlePassword } = require("../middleware/user.middleware");
const { verifyAuth } = require("../middleware/login.middleware");

// 创建路由对象
const userRouter = new KoaRouter({ prefix: "/users" });

// 用户注册或新增用户接口
userRouter.post("/", verifyUser, handlePassword, UserController.create);

// 删除用户数据
userRouter.delete("/:id", UserController.deleteUserById);

// 获取用户信息接口
userRouter.post("/list", verifyAuth, UserController.queryUsersList);

// 获取用户详细信息接口
userRouter.get("/list/1", verifyAuth, UserController.getUserInfo);

// 编辑更新用户信息
userRouter.patch("/:id", verifyAuth, UserController.editUserInfo);

module.exports = userRouter;
