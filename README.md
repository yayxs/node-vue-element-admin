## 文件上传

```js
// 引入path和fs模块
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

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
app.use(upload.any());

//在req.files中获取文件数据
app.post("/upload", upload.single("file"), (req, res, next) => {
  console.log(req.files);
  res.send("上传文件成功");
});

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
```

## 客户端发送请求的方式

- json
- form-data
- form-urlencoded
- params
- query
