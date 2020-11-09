const Router = require("koa-router");
const axios = require("axios");
const router = new Router();

router.get(`/api/v1/covid19/list`, async (ctx, next) => {
  const url = `http://api.tianapi.com/txapi/ncovcity/index?key=3f516e324ae2bd191a85e00cb8db9ea3`;
  const res = await axios(url);
  ctx.set("Content-Type", "application/json");
  ctx.body = {
    code: 0,
    data: res
  };
});

module.exports = router;
