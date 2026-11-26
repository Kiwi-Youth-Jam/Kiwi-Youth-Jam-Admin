import { sessionManager } from '#lib/server/sessionManager.js';
import { redirect } from '@sveltejs/kit';

export async function GET({ request, cookies }) {
    const session = sessionManager.getSession(String(cookies.get('session')));

    if (session)
        sessionManager.removeSession(session);

    cookies.delete('session', { path: '/' });
    redirect(303, '/');
}