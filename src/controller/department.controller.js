class departmentController {
  // 增加部门
  async createDepartment(ctx, next) {}
  // 删除部门
  async delelteDepartment(ctx, next) {}
  // 获取部门列表
  async queryDepartmentList(ctx, next) {
    ctx.body = {
      code: 0,
      data: {
        list: [
          {
            id: 5,
            name: "人事部",
            parentId: 1,
            createAt: "2021-01-02T10:04:02.000Z",
            updateAt: "2021-05-02T07:33:08.000Z",
            leader: "lily",
          },
          {
            id: 4,
            name: "客服部",
            parentId: 2,
            createAt: "2021-01-02T10:04:02.000Z",
            updateAt: "2021-08-03T11:14:32.000Z",
            leader: "lily",
          },
          {
            id: 3,
            name: "运营部",
            parentId: 1,
            createAt: "2021-01-02T10:03:42.000Z",
            updateAt: "2021-01-05T08:25:52.000Z",
            leader: "lucy",
          },
          {
            id: 2,
            name: "研发部",
            parentId: 1,
            createAt: "2021-01-02T10:03:21.000Z",
            updateAt: "2021-01-05T08:25:49.000Z",
            leader: "lilei",
          },
          {
            id: 1,
            name: "总裁办",
            parentId: null,
            createAt: "2021-01-02T10:03:09.000Z",
            updateAt: "2021-01-05T08:25:46.000Z",
            leader: "coderwhy",
          },
        ],
        totalCount: 5,
      },
    };
  }
  // 修改部门信息
  async editDepartmentInfo(ctx, next) {}
}

module.exports = new departmentController();
