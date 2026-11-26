import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
    CDN_URL: { public: true },
    GOOGLE_DRIVE_LINK: { public: true },
    NEWSLETTER_URL: { public: true },
    NEWSLETTER_EDIT_URL: { public: true },
    SALT_ROUNDS: { public: true },
    SMTP_HOST: {},
    SMTP_PORT: {},
    SMTP_ADDRESS: {},
    SMTP_USER: {},
    SMTP_PASSWORD: {},
    MYSQL_HOST: {},
    MYSQL_USER: {},
    MYSQL_PASSWORD: {},
    MYSQL_DB: {},
    MYSQL_PORT: {},
    ADMIN_EMAIL: {},
    ADMIN_PASSWORD: {},
    ABOUT_PAGE_EDIT_URL: { public: true },
    CONTACT_PAGE_EDIT_URL: { public: true },
    SPONSORS_PAGE_EDIT_URL: { public: true },
    TEAM_PAGE_EDIT_URL: { public: true }
});