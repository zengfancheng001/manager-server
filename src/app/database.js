const mysql =  require('mysql2')

const connectionPool = mysql.createPool({
  host:'localhost',
  port:'3306',
  database:'zfcManager',
  user:'root',
  password:'admin123',
  connectionLimit:5
})

// 获取连接是否成功
connectionPool.getConnection((err,connection)=> {
  if(err) {
    console.log('获取数据库连接失败~',err)
    return
  }

  // 获取connection,尝试和数据库建立一下连接
  connection.connect(err=>{
    if (err) {
      console.log('数据库连接成功，交互失败~',err);
    } else {
      console.log('数据库连接成功，可以进行操作~');
    }
  })
})

const connection = connectionPool.promise()

module.exports = connection