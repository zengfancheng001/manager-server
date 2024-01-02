const userService = require("../service/user.service");

class UserController {
  async create(ctx, next) {
    // 获取用户传递过来的信息
    const user = ctx.request.body;

    // 将信息存储到数据库
    const result = await userService.create(user);

    // 查看存储的信息，将信息返回客户端
    ctx.body = {
      message: "创建用户成功~",
      data: result,
    };
  }

  // 获取用户详细信息
  async getUserInfo(ctx, next) {
    // const result = await userService.findUserByName(username);

    // 向客户端返回用户详细信息
    ctx.body = {
      id: 1,
      name: "coderwhy",
      realname: "coderwhy",
      cellphone: 18812345678,
      enable: 1,
      createAt: "2021-01-02T10:20:26.000Z",
      updateAt: "2021-01-03T04:50:13.000Z",
      role: {
        id: 1,
        name: "超级管理员",
        intro: "所有权限",
        createAt: "2021-01-02T10:01:52.000Z",
        updateAt: "2021-01-02T10:01:52.000Z",
      },
      department: {
        id: 1,
        name: "总裁办",
        parentId: null,
        createAt: "2021-01-02T10:03:09.000Z",
        updateAt: "2021-01-05T08:25:46.000Z",
        leader: "coderwhy",
      },
    };
  }
}

module.exports = new UserController();
