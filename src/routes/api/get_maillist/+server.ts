import { db } from '#lib/database/database.ts';

export async function GET({ request }) {
	return Response.json(await db.getMaillist());
}