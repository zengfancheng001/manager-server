const KoaRouter = require("@koa/router");
const roleController = require("../controller/role.controller");
const { verifyAuth } = require("../middleware/login.middleware");

const roleRouter = new KoaRouter({ prefix: "/role" });

roleRouter.post("/list", verifyAuth, roleController.queryRoLesList);
roleRouter.get("/1/menu", roleController.getMemuByRole);
module.exports = roleRouter;
