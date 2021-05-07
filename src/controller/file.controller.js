
const fileService = require('../service/file.service')
const userService = require('../service/user.service')
class FileController {
    async saveAvatar (ctx,next){
        console.log('ctx.file', ctx.file);
        // 获取图像的信息
        const { filename, mimetype,size } = ctx.file
        // 图像信息保存在数据库

        const res = await fileService.saveAvatar({filename, mimetype,size})
        // 图片地址保存在user表中
        const avatarUrl = `http://127.0.0.1:3000/user/1/avatar`
        // 根据id 更新头像
        await userService.updateAvatarUrlById ( avatarUrl,'1')
        ctx.body = `上传头像成功`
    }
}

module.exports = new FileController()