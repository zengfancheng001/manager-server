const app = require("./app");
const { SERVER_PORT } = require("./config/server");
require("./utils/handle-error");

app.listen(SERVER_PORT, () => {
  console.log("综合后台管理服务器在8000端口启动成功~~");
});
