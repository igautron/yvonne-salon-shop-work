const express = require('express');
const mysql = require('mysql2/promise');
const config = require('./config');

async function main() {
    const conn = await mysql.createConnection(config);
    const [row, fields] = await conn.execute("select * from viddilenia_np WHERE City ='choice'")
    console.log(row);
    conn.end()
}

main();
