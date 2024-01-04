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

  // 获取用户信息
  async getUsersData(ctx, next) {
    // const result = await userService.findUserData(offset,size);

    // 返回用户数据
    ctx.body = {
      code: 0,
      data: {
        list: [
          {
            id: 12,
            name: "lyh3",
            realname: "李银河3",
            cellphone: 17754456666,
            enable: 0,
            departmentId: 2,
            roleId: 3,
            createAt: "2021-05-02T07:24:12.000Z",
            updateAt: "2021-08-20T04:07:23.000Z",
          },
          {
            id: 11,
            name: "lyh2",
            realname: "李银河2",
            cellphone: 17754456666,
            enable: 1,
            departmentId: 2,
            roleId: 3,
            createAt: "2021-05-02T07:24:12.000Z",
            updateAt: "2021-08-20T04:07:23.000Z",
          },
          {
            id: 10,
            name: "lyh2",
            realname: "李银河1",
            cellphone: 17754456666,
            enable: 0,
            departmentId: 2,
            roleId: 3,
            createAt: "2021-05-02T07:24:12.000Z",
            updateAt: "2021-08-20T04:07:23.000Z",
          },
          {
            id: 9,
            name: "lyh",
            realname: "李银河",
            cellphone: 17754456666,
            enable: 1,
            departmentId: 2,
            roleId: 3,
            createAt: "2021-05-02T07:24:12.000Z",
            updateAt: "2021-08-20T04:07:23.000Z",
          },
          {
            id: 8,
            name: "wxb",
            realname: "王小波",
            cellphone: 18855556666,
            enable: 1,
            departmentId: 2,
            roleId: 3,
            createAt: "2021-05-02T07:24:12.000Z",
            updateAt: "2021-05-02T07:26:20.000Z",
          },
          {
            id: 7,
            name: "kobe",
            realname: "kobe",
            cellphone: 16655556666,
            enable: 1,
            departmentId: 2,
            roleId: 3,
            createAt: "2021-05-02T07:24:12.000Z",
            updateAt: "2021-05-02T07:26:20.000Z",
          },
          {
            id: 6,
            name: "lily",
            realname: "lily",
            cellphone: 13355556666,
            enable: 1,
            departmentId: 2,
            roleId: 3,
            createAt: "2021-05-02T07:24:12.000Z",
            updateAt: "2021-05-02T07:26:20.000Z",
          },
          {
            id: 5,
            name: "coderdemo",
            realname: "demo",
            cellphone: 17766665555,
            enable: 1,
            departmentId: 5,
            roleId: 4,
            createAt: "2021-08-23T07:24:12.000Z",
            updateAt: "2021-08-23T07:24:21.000Z",
          },
          {
            id: 4,
            name: "codertest",
            realname: "test",
            cellphone: 16655552222,
            enable: 1,
            departmentId: 3,
            roleId: 3,
            createAt: "2021-08-23T07:25:02.000Z",
            updateAt: "2021-08-23T07:25:09.000Z",
          },
          {
            id: 3,
            name: "lucy",
            realname: "lucy",
            cellphone: 15566668888,
            enable: 1,
            departmentId: 1,
            roleId: 1,
            createAt: "2021-01-03T04:01:40.000Z",
            updateAt: "2021-08-09T16:09:41.000Z",
          },
          {
            id: 2,
            name: "lilei",
            realname: "lilei2",
            cellphone: 13322223333,
            enable: 1,
            departmentId: 1,
            roleId: 1,
            createAt: "2021-01-03T03:34:34.000Z",
            updateAt: "2021-08-20T03:02:12.000Z",
          },
          {
            id: 1,
            name: "coderwhy",
            realname: "coderwhy",
            cellphone: 18812345678,
            enable: 1,
            departmentId: 1,
            roleId: 1,
            createAt: "2021-01-02T10:20:26.000Z",
            updateAt: "2021-01-03T04:50:13.000Z",
          },
        ],
        totalCount: 12,
      },
    };
  }
}

module.exports = new UserController();
