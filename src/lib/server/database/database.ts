import { connection, initDB } from '#lib/server/database/connection.ts';
import { Session } from '#lib/server/sessionManager.ts';
import type { RowDataPacket } from 'mysql2';
import { BcryptManager } from './hash';

class DatabaseManager {
    hasher: BcryptManager;

    constructor () {
        initDB();

        this.hasher = new BcryptManager();
    }

    async getMaillist() {
        return ['drew@drewfitzgerald.co.nz'];
    }

    async getUser(email: string) {
        const [rows] = await connection.query<RowDataPacket[]>("SELECT * FROM users WHERE email=?", [email]);

        return rows[0];
    }

    async addUser(email: string, password: string) {
        const [rows] = await connection.query<RowDataPacket[]>('SELECT email FROM users WHERE email=?', [email]);

        if (rows.length > 0)
            return false;

        await connection.execute('INSERT INTO users (email, passwd) VALUES (?, ?)', [email, await this.hasher.hash(password)]);
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