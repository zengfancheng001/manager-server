const KoaRouter = require("@koa/router");
const menuController = require("../controller/menu.controller");
const { verifyAuth } = require("../middleware/login.middleware");

const menuRouter = new KoaRouter({ prefix: "/menu" });

menuRouter.post("/list", verifyAuth, menuController.getMemuInfo);

module.exports = menuRouter;
