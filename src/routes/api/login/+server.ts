import { db } from '#lib/server/database/database.ts';
import { sessionManager } from '#lib/server/sessionManager.js';
import { redirect } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
    const post_data = await request.formData();

    const email = post_data.get('email');
    const password = post_data.get('password');

    const session = await db.login(String(email), String(password));

    if (!session)
        return Response.redirect(new URL('/login', request.url), 303);

    sessionManager.addSession(session);
    cookies.set('session', session.token, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        expires: new Date(session.expires)
    });

    redirect(303, '/');
}