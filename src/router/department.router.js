const KoaRouter = require("@koa/router");
const departmentController = require("../controller/department.controller");
const { verifyAuth } = require("../middleware/login.middleware");

const departmentRouter = new KoaRouter({ prefix: "/department" });

// 新建部门
departmentRouter.post("/", departmentController.createDepartment);
// 获取部门数据
departmentRouter.post(
  "/list",
  verifyAuth,
  departmentController.queryDepartmentList
);

// 删除部门数据
departmentRouter.delete(
  "/:id",
  verifyAuth,
  departmentController.deleteDepartmentData
);
module.exports = departmentRouter;
