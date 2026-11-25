import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
    CDN_URL: { public: true },
    GOOGLE_DRIVE_LINK: { public: true },
    NEWSLETTER_URL: { public: true }
});