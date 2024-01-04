const connection = require("../app/database");

class UserService {
  async create(user) {
    // 获取用户信息
    const { username, password } = user;
    // 拼接sql语句
    const statement = "INSERT INTO user (username, password) VALUES (?, ?);";
    // 执行语句
    const [result] = await connection.execute(statement, [username, password]);
    return result;
  }

  // 根据用户名查询用户信息
  async findUserByName(username) {
    const statement = "SELECT * FROM user WHERE username = ?;";
    const [values] = await connection.execute(statement, [username]);
    return values;
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
    console.log(result);

    return result;
  }
}

module.exports = new UserService();
