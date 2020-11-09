const Koa = require("koa");
const app = new Koa();
// 应用程序初始化
const Init = require('./core/init')
// 初始化调用
Init.entrance(app)
app.listen(3000);