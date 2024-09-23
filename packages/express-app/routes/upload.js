// 引入path和fs模块
const path = require("path");

const express = require("express");
const router = express.Router();
// 用来日志保存
// 引入multer
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname + "-" + Date.now());
  },
});

// 注册一个对象，
const upload = multer({
  storage,
});

// 使用中间件，没有挂载路径，应用的每个请求都会执行该中间件。
// any表示接受一切，具体参考文档。
// 禁止全局中间件
router.use(upload.any());

//在req.files中获取文件数据
router.post("/", upload.single("file"), (req, res, next) => {
  console.log(req.files);
  res.send("上传文件成功");
});

module.exports = router;
