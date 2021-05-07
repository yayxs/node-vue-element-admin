const connection = require('../config/db');

// CREATE TABLE IF NOT EXISTS `avatar`(
// 	id INT PRIMARY KEY AUTO_INCREMENT,
// 	filename VARCHAR(255) NOT NULL UNIQUE,
// 	mimetype VARCHAR(30),
// 	size INT,
// 	user_id INT,
// 	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// 	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
// 	FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE
// );
const sqlMap = {
    'tableName':`avatar`,
    'saveAvatar':`INSERT INTO avatar (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?);`
}

class FileService {
    async saveAvatar(avatarInfo){
        const {filename,mimetype, size,} = avatarInfo
        const [result] = await connection.execute(sqlMap['saveAvatar'], [filename, mimetype, size, '1']);
        return result
    }
}

module.exports = new FileService()