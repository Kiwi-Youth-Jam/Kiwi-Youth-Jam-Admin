import { connection, initDB } from '#lib/database/connection.ts';
import { Session } from '#lib/sessionManager.ts';

class DatabaseManager {
    constructor () {
        initDB();
    }

    async getMaillist() {
        return ['drew@drewfitzgerald.co.nz'];
    }
}

export const db: DatabaseManager = new DatabaseManager();