const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

app.use("/users", require("./routes/users"));
app.use("/upload", require("./routes/upload"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(logger("dev"));
// body参数解析
app.use(express.json());
/**
 * extended: true 使用的第三方库
 * extended: false 使用的Node中的模块
 */
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// 静态资源部署 静态资源服务器
app.use(express.static("./build"));

app.use((req, res, next) => {
  next(createError(404));
});

module.exports = app;
