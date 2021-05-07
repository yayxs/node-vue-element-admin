
const Router = require('@koa/router');

const {avatarHandler } = require('../middleware/file.middleware')
const { saveAvatar} = require('../controller/file.controller')
const router = new Router({
  prefix:'/upload'
})

// add a route for uploading single files
router.post(
  '/avatar',
  avatarHandler,
  saveAvatar
);
module.exports = router;
