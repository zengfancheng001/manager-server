const connection = require("../app/database");

class UserService {
  async create(user) {
    // 获取用户信息
    const { username, password } = user;
    // 拼接sql语句
    const statement = "INSERT INTO user (username, password) VALUES (?, ?);";
    // 执行语句
    const [result]= await connection.execute(statement, [username, password]);
    return result
  }

  // 查询用户
  async findUserByName(username) {
    const statement = 'SELECT * FROM user WHERE username = ?;'
    const [ values] = await connection.execute(statement,[username])
    return values
  }
}

module.exports = new UserService();
