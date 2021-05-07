const connection = require('../config/db');

// CREATE TABLE IF NOT EXISTS `user`(
// 	id INT PRIMARY KEY AUTO_INCREMENT,
// 	username VARCHAR(30) NOT NULL UNIQUE,
// 	password VARCHAR(50) NOT NULL,
// 	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// 	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// );
const sqlMap = {
    'user_table':``,
    'create':`INSERT INTO user (username, password) VALUES (?, ?);`, // 创建一名用户
    'updateAvatarUrlById':`UPDATE user SET avatar_url = ? WHERE id = ?;`
}

class UserService {
    async create(user){
        console.log(user)
        const { username,password} = user
        const res = await connection.execute(sqlMap['create'],[username,password])
        return res[0]
    }

    async updateAvatarUrlById(url,userId){
        const [result] = await connection.execute(sqlMap['updateAvatarUrlById'], [url, userId]);
        return result
    }
}

module.exports = new UserService()