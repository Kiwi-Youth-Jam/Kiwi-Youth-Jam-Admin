import { redirect } from '@sveltejs/kit';
import type { Handle, ServerInit } from '@sveltejs/kit/hooks';
import { sessionManager } from '#lib/server/sessionManager.ts';
import { db } from '#lib/server/database/database.ts';

const PUBLIC_ROUTES = new Set(['/login', '/api/login']);

export const init: ServerInit = async () => {
	await db.connect();
};

export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('session');
    const session = token ? sessionManager.getSession(token) : null;

	if (!PUBLIC_ROUTES.has(event.route.id ?? '') && !session)
		redirect(303, '/login');

	if (session) {
		const user = await db.getUser(session.user_id);

		event.locals.user = user;
	}

	return resolve(event);
};