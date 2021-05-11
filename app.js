const Koa  = require('koa')
const sha1 = require('sha1') // 加密模块

const config = {
    wechat:{
        appID:``, // 开发者 id
        AppSecret:``,
        token:``,
    }
}
const app = new Koa()

app.use( async(ctx,next)=>{
    ctx.body = `weixin `
})

app.listen(3003,()=>{
    console.log(`http://localhost:3003`)
})