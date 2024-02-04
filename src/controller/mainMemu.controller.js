class MainMenuController {
  async getMainMemuInfo(ctx, next) {
    // 数据库中查找菜单信息

    // 向客户端返回主页菜单信息
    ctx.body = {
      code: 0,
      data: {
        list: [
          {
            id: 1,
            name: "首页",
            type: 1,
            url: "/main/home",
            icon: "",
            sort: 1,
            createAt: "2021-04-19T14:11:02.000Z",
            updateAt: "2021-08-20T06:59:55.000Z",
            children: [],
          },
          {
            id: 2,
            name: "娱乐",
            type: 1,
            url: "/main/amusement",
            icon: "",
            sort: 1,
            createAt: "2021-04-19T14:11:02.000Z",
            updateAt: "2021-08-20T06:59:55.000Z",
            children: [],
          },
          {
            id: 3,
            name: "生活",
            type: 1,
            url: "/main/life",
            icon: "",
            sort: 1,
            createAt: "2021-04-19T14:11:02.000Z",
            updateAt: "2021-08-20T06:59:55.000Z",
            children: [],
          },
          {
            id: 4,
            name: "魔方世界",
            type: 1,
            url: "/main/cuber",
            icon: "",
            sort: 1,
            createAt: "2021-04-19T14:11:02.000Z",
            updateAt: "2021-08-20T06:59:55.000Z",
            children: [],
          },
          {
            id: 5,
            name: "博客",
            type: 1,
            url: "/main/boke",
            icon: "",
            sort: 1,
            createAt: "2021-04-19T14:11:02.000Z",
            updateAt: "2021-08-20T06:59:55.000Z",
            children: [],
          },
          {
            id: 6,
            name: "邮箱",
            type: 1,
            url: "/main/email",
            icon: "",
            sort: 1,
            createAt: "2021-04-19T14:11:02.000Z",
            updateAt: "2021-08-20T06:59:55.000Z",
            children: [],
          },
        ],
        totalCount: 6,
      },
    };
  }
}

module.exports = new MainMenuController();
