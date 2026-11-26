import { db } from '#lib/server/database/database.ts';
import { sessionManager } from '#lib/server/sessionManager.js';

export async function GET({ request, cookies }) {
    const session = sessionManager.getSession(String(cookies.get('session')));

    if (!session)
        return new Response('Unauthorized', { status: 401 });

    const user = await db.getUser(session.user_id);
    return Response.json(user);
}