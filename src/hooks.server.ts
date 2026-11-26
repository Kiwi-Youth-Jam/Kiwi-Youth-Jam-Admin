import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit/hooks';
import { sessionManager } from '#lib/sessionManager.ts';
import { db } from '#lib/database/database.ts';

const PUBLIC_ROUTES = new Set(['/login']);

export const handle: Handle = async ({ event, resolve }) => {
    const session = sessionManager.getSession(String(event.cookies.get('session')));

	if (!PUBLIC_ROUTES.has(event.route.id ?? '') || (!session && !PUBLIC_ROUTES.has(event.route.id ?? '')))
		redirect(303, '/login');

	return resolve(event);
};