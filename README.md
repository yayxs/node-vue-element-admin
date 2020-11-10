## 常用操作

### 路由处理

```js
const Router = require("koa-router");

const router = new Router({
  prefix: "/users",
});

router.post("/", (ctx, next) => {
  ctx.response.body = "users /";
});

module.exports = router;
```

### 文件上传

```js
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
```
