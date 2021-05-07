const mysql = require('mysql2')


const connection = mysql.createPool({
    host: 'localhost',
    post:'3306',
    user: 'root',
    database: 'vast',
    password:'4hass2wDZ_r3'
  });
  connection.getConnection(err=>{
      if(err){
          console.log('con err')
      }else{
          console.log('success')
      }
  })
  module.exports = connection.promise();