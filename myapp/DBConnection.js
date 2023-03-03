const mysql = require('mysql');
const conn = mysql.createConnection({
  host: '161.35.222.168:3306',
  user: 'its_311',
  password: 'pl2AobTawq5C&m&PWve',
});

conn.connect(function (err, conn) {
  if (err) throw err;
  console.log('Connesso');
});
