const KoaRouter = require("@koa/router");
const roleController = require("../controller/role.controller");

const roleRouter = new KoaRouter({ prefix: "/role" });

roleRouter.post("/list", roleController.queryRoLesList);
module.exports = roleRouter;
