const Router = require("koa-router");

const router = new Router();

router.get(`/api/v1/home/list`, (ctx, next) => {
  console.log(`api/v1/home/list执行`);
  ctx.body = {
    code: 0
  };
});


module.exports =router