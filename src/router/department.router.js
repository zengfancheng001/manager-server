const KoaRouter = require("@koa/router");
const departmentController = require("../controller/department.controller");

const departmentRouter = new KoaRouter({ prefix: "/department" });

departmentRouter.post("/list", departmentController.queryDepartmentList);

module.exports = departmentRouter;
