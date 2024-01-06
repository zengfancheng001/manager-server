const connection = require("../app/database");

class UserService {
  async create(user) {
    // 获取用户信息
    const { username, realname, password, cellphone, roleId, departmentId } =
      user;
    // 拼接sql语句
    const statement =
      "INSERT INTO user (username,realname, password,cellphone,roleId,departmentId) VALUES (?, ?,?,?,?,?);";
    // 执行语句
    const [result] = await connection.execute(statement, [
      username,
      realname,
      password,
      cellphone,
      roleId,
      departmentId,
    ]);
    return result;
  }

  // 根据用户名查询用户信息
  async findUserByName(username) {
    const statement = "SELECT * FROM user WHERE username = ?;";
    const [values] = await connection.execute(statement, [username]);
    return values;
  }

  // 根据用户名查询用户信息
  async deleteUserById(id) {
    const statement = "DELETE FROM user WHERE id = ?;";
    const [value] = await connection.execute(statement, [id]);
    return value;
  }

  // 查询用户列表
  async queryUserList(offset, size) {
    const statement = "SELECT * FROM user LIMIT ? OFFSET ?";
    const [result] = await connection.execute(statement, [size, offset]);

    return result;
  }

  //查询用户数
  async querUserCount() {
    const statement = "select count(*) as userCount from user;";
    const [result] = await connection.execute(statement);
    return result;
  }

  // 编辑用户
  async editUserInfo(user) {
    const { id, username, realname, cellphone, roleId, departmentId } = user;
    // 拼接sql语句
    const statement =
      "UPDATE user SET username=?,realname=?,cellphone=?,roleId=?,departmentId=? WHERE id=?;";
    // 执行语句

    try {
      const [result] = await connection.execute(statement, [
        username,
        realname,
        cellphone,
        roleId,
        departmentId,
        id,
      ]);
      return result;
    } catch (error) {
      console.log("更新数据异常");
    }
  }
}

module.exports = new UserService();
