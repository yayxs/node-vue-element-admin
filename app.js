const Koa = require("koa");
const app = new Koa();

const bodyParser = require("koa-bodyparser");

app.use(bodyParser());
app.use(require("./router/user").routes());
app.use(require("./router/upload").routes());

app.use(require("./router/user").allowedMethods());

app.listen(3000, () => {
  console.log(`http://lcoalhost:3000`);
});
