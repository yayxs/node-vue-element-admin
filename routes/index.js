const express = require("express");
const router = express.Router();

/**
 * desc
 * req 请求对象
 * res 响应对象
 */
router.get("/", (req, res, next) => {
  res.render("index", { title: "服务器启动" });
  next();
});

module.exports = router;
