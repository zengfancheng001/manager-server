const KoaRouter = require("@koa/router");
const menuController = require("../controller/menu.controller");
const { verifyAuth } = require("../middleware/login.middleware");

const menuRouter = new KoaRouter({ prefix: "/role" });

menuRouter.get("/1/menu", verifyAuth, menuController.getMemuInfo);

module.exports = menuRouter;
