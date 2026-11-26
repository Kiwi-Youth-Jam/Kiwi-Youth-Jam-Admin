import { error, redirect } from '@sveltejs/kit';
import { parse } from 'csv-parse';
import { Readable } from 'node:stream';
import { db } from '#lib/server/database/database.js';

export async function POST({ request }) {
	const formData = await request.formData();
	const file = formData.get('file');

	if (!(file instanceof File) || file.size === 0)
		error(400, 'No valid file uploaded');

	const buffer = Buffer.from(await file.arrayBuffer());
    const records: string[] = [];

    Readable.from(buffer).pipe(parse({ columns: true, skip_empty_lines: true, trim: true, bom: true })).on('data', (row) => records.push(row));

    for (let record of records)
        //await db.addToMailist(record);
        console.log(record)

    redirect(303, '/newsletter');
};