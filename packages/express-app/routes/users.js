const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json(`get users`);
});

router.post("/", (req, res, next) => {
  res.json(`post users`);
});

module.exports = router;
