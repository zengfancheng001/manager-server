const userService = require('../service/user.service')

class UserController {
  async create(ctx, next) {
    // 获取用户传递过来的信息
    const user = ctx.request.body;

    // 将信息存储到数据库
     const result = await userService.create(user)

    // 查看存储的信息，将信息返回客户端
    ctx.body = {
      message:'创建用户成功~',
      data: result,
    };
  }
}

module.exports = new UserController();
