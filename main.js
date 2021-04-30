/**
 * @description 爬取B站用户的粉丝
 * @author yayxs
 * @github https://github.com/yayxs
 */

let axios = require("axios");

const { webUrl } = require('./src/config/baseConfig')
console.log(webUrl)
// let mysql = require("mysql");
// 引入爬虫辅助
// const cheerio = require("cheerio"); 暂时先不用

// 连接数据库
// 配置对象
// const config = {
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "blog"
// };
// // 建立连接
// let con = mysql.createConnection(config);
// con.connect(err => {
//   if (err) {
//     console.log(`数据库建立失败`);
//   }
// });

// 异步获取数据
async function fetchContent(url) {

  const res = await axios.get(url);

  console.log(res.data)
  // const {
  //   s,
  //   m,
  //   d: { total, entrylist }
  // } = res.data;
  // if (s === 1 && m === "ok") {
  //   // 请求成功
  //   return entrylist;
  // } else {
  //   return `reqErr`;
  // }
}

fetchContent(webUrl);

// 循环处理数据
// (async function handleData() {
//   const res = await getEntryBySelf();
//   // 循环处理数据

//   res.forEach((item, index) => {
//     // 收藏量
//     let collectionCount = item.collectionCount;
//     // 评论数
//     let commentsCount = item.commentsCount;
//     // 文章的主页地址
//     let originalUrl = item.originalUrl;
//     // 创建时间
//     let createdAt = item.createdAt;
//     // 封面图
//     let screenshot = item.screenshot;
//     // 文章的内容
//     let content = item.content;
//     // 文章的标题
//     let title = item.title;
//     // 文章的分类
//     let category = item.category.name;
//     // 文章的浏览量
//     let viewsCount = item.viewsCount;
//     // 其他信息
//     let summaryInfo = item.summaryInfo;
//     // 数据入数组
//     let arrData = [
//       collectionCount,
//       commentsCount,
//       originalUrl,
//       createdAt,
//       screenshot,
//       content,
//       title,
//       category,
//       viewsCount,
//       summaryInfo
//     ];
//     console.log(arrData)
//     // 数据插入数据库
//     // let testSql = "INSERT INTO zhuan_lan (collectionCount,commentsCount,originalUrl,createdAt,screenshot,content,titlte,category,viewsCount,summaryInfo) VALUES (21,2121,'212','212','212','212','212','221','2121','212')";
//     let iblogSql = 
//       "INSERT INTO zhuan_lan (collectionCount,commentsCount,originalUrl,createdAt,screenshot,content,titlte,category,viewsCount,summaryInfo) VALUES (?,?,?,?,?,?,?,?,?,?)";
//     // 插入数据
//     con.query(iblogSql, arrData, (err, res) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(`插入成功`);
//       }
//     });

    // // 清空测试数据
    // let delSql = "truncate table zhuan_lan"
    // con.query(delSql,(err)=>{
    //   if(err){
    //     console.log(err)
    //   }else{
    //     console.log(`清空数据成功`)
    //   }
    // })
//   });
// })();


function getFuns(){
  
}

getFuns()