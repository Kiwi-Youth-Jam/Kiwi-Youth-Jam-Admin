import mysql from "mysql2/promise";
// @ts-ignore
import { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB, MYSQL_PORT } from '$app/env/private';

export let connection: mysql.Pool;

export async function setDB(name: string) {
    connection = mysql.createPool({
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: name,
        port: Number(MYSQL_PORT)
    });

    await connection.execute('CREATE TABLE IF NOT EXISTS users (user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, passwd TEXT NOT NULL, email TEXT NOT NULL)');
}

export async function initDB() {
    const connection = await mysql.createConnection({
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        port: Number(MYSQL_PORT)
    });

    await connection.execute(`CREATE DATABASE IF NOT EXISTS \`${MYSQL_DB}\``);
    await connection.end();

    await setDB(MYSQL_DB);
}