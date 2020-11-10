const Router = require("koa-router");
const multer = require("koa-multer");
const router = new Router({
  prefix: "/upload",
});

const upload = multer({
  dest: "./upload/",
});
router.post("/avatar", upload.single("avatar"), (ctx, next) => {
  console.log(ctx.req.file);
});

module.exports = router;
