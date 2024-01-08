const departmentService = require("../service/department.service");
const DepartmentService = require("../service/department.service");

class departmentController {
  // 增加部门
  async createDepartment(ctx, next) {
    const department = ctx.request.body;
    const result = await departmentService.createDepartment(department);

    ctx.body = {
      code: 0,
      message: "新建部门成功~",
    };
  }
  // 删除部门
  async deleteDepartmentData(ctx, next) {
    const { id } = ctx.params;
    console.log(id);
    const result = await DepartmentService.deleteDepartmentById(id);
    ctx.body = {
      code: 0,
      message: "删除用户成功~",
    };
  }
  // 获取部门列表
  async queryDepartmentList(ctx, next) {
    const { offset, size } = ctx.request.body;

    const result = await DepartmentService.queryDepartmentList(offset, size);
    const totalCount = await DepartmentService.queryDepartmentCount();
    ctx.body = {
      code: 0,
      data: {
        list: result,
        totalCount: totalCount[0].departmentCount,
      },
    };
  }
  // 修改部门信息
  async editDepartmentInfo(ctx, next) {}
}

module.exports = new departmentController();
