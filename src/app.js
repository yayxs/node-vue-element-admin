const Koa = require("koa");
const app = new Koa();
require('./config/db');
const bodyParser = require("koa-bodyparser");
const useRoutes = require('./router/index');
app.useRoutes = useRoutes;
app.use(bodyParser());
app.useRoutes();

app.listen(3000, () => {
  console.log(`http://127.0.0.1:3000`);
});
