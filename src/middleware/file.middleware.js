
const multer = require('@koa/multer');
const uplaod = multer({
    dest:'./upload/avatar'
})

const avatarHandler  = uplaod.single('avatar')

module.exports = {
    avatarHandler
}
