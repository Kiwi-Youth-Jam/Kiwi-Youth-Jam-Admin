import { connection, initDB } from '#lib/server/database/connection.ts';
import { Session } from '#lib/server/sessionManager.ts';
import type { RowDataPacket } from 'mysql2';
import { BcryptManager } from './hash';

import { ADMIN_EMAIL, ADMIN_PASSWORD } from '$app/env/private';

class DatabaseManager {
    hasher: BcryptManager;

    constructor () {
        this.hasher = new BcryptManager();
    }

    async connect() {
        await initDB();

        await this.addUser('Kiwi Youth Jam', 'Admin', ADMIN_EMAIL, ADMIN_PASSWORD);
    }

    async getMaillist() {
        return ['drew@drewfitzgerald.co.nz'];
    }

    async getUser(email: string) {
        const [rows] = await connection.query<RowDataPacket[]>("SELECT * FROM users WHERE email=?", [email]);

        return rows[0];
    }

    async addUser(firstname: string, lastname: string, email: string, password: string) {
        const [rows] = await connection.query<RowDataPacket[]>('SELECT email FROM users WHERE email=?', [email]);

        if (rows.length > 0)
            return false;

        await connection.execute('INSERT INTO users (email, passwd, firstname, lastname) VALUES (?, ?, ?, ?)', [email, await this.hasher.hash(password), firstname, lastname]);
        return true;
    }

    async login(email: string, password: string) {
        const user = await this.getUser(email);

        if (!user || !await this.hasher.compareHashes(password, user.passwd))
            return null;

        const session = new Session(email, 7.884e+9);
        return session;
    }
}

export const db: DatabaseManager = new DatabaseManager();