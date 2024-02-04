const KoaRouter = require("@koa/router");
const MainMenuController = require("../controller/mainMemu.controller");

const mainMenuRouter = new KoaRouter({ prefix: "/mainmenu" });

mainMenuRouter.post("/list", MainMenuController.getMainMemuInfo);

module.exports = mainMenuRouter;
