const express = require('express');
const mysql = require('mysql2/promise');
const config = require('./config');

const asincDB = require('./asincDB')

// const connection = mysql.createConnection( {
//   host: '127.0.0.1',
//   password: 'root',
//   login: 'root',
//   database: 'product'
// })
//
// connection.connect((err) => {
//   if(err) throw err;
//   console.log('Connected');
// })
//
// app.get("/",(req,res) => {
//   connection.query('SELECT * from product_list', (err, rows) => {
//     if(err) throw err;
//     console.log('Error', rows);
//     connection.end();
//   });
// });

// app.listen(3000, () => {
//   console.log('Server is running at port 3000');
// });




