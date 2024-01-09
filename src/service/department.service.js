const connection = require("../app/database");

class DepartmemtService {
  // 新建部门
  async createDepartment(department) {}

  // 获取部门列表
  async queryDepartmentList(offset, size) {
    const statement = "SELECT * FROM department LIMIT ? OFFSET ?";
    const [result] = await connection.execute(statement, [size, offset]);
    return result;
  }
  // 获取部门列表
  async queryDepartmentList() {
    const statement = "SELECT * FROM department";
    const [result] = await connection.execute(statement);
    return result;
  }

  //获取用户数
  async queryDepartmentCount() {
    const statement = "select count(*) as departmentCount from department;";
    const [result] = await connection.execute(statement);
    return result;
  }

  // 删除部门数据
  async deleteDepartmentById(id) {
    console.log(id);
    const statement = "DELETE FROM department WHERE id = ?;";
    const [value] = await connection.execute(statement, [id]);
    return value;
  }
}

module.exports = new DepartmemtService();
