const Router = require("koa-router");

const router = new Router({
  prefix: "/users",
});

router.post("/", (ctx, next) => {
  ctx.response.body = "users /";
});

module.exports = router;
