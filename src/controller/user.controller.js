
const UserService = require('../service/user.service')
class UserController {
    async create (ctx,next){
    const user = ctx.request.body
    const res = await UserService.create(user)
    ctx.body = res
    }
}

module.exports = new UserController()