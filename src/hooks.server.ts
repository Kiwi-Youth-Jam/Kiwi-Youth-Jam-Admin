import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit/hooks';
import { sessionManager } from '#lib/server/sessionManager.ts';

const PUBLIC_ROUTES = new Set(['/login', '/api/login']);

export const handle: Handle = async ({ event, resolve }) => {
    const session = sessionManager.getSession(String(event.cookies.get('session')));

	if (!PUBLIC_ROUTES.has(event.route.id ?? '') && !session)
		redirect(303, '/login');

	return resolve(event);
};