import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
    CDN_URL: { public: true },
    GOOGLE_DRIVE_LINK: { public: true },
    SALT_ROUNDS: { public: true },
    LISTMONK_URL: { public: true },
    MYSQL_HOST: {},
    MYSQL_USER: {},
    MYSQL_PASSWORD: {},
    MYSQL_DB: {},
    MYSQL_PORT: {},
    ADMIN_EMAIL: {},
    ADMIN_PASSWORD: {}
});