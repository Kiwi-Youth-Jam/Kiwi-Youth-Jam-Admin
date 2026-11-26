import { db } from '#lib/database/database.ts';
import { sendEmail } from '#lib/email.js';
import { NEWSLETTER_URL } from '$app/env/public';

export async function POST({ request }) {
    const post_data = await request.formData();

    const to = post_data.get('to');
    const subject = post_data.get('subject');

    const maillist = await db.getMaillist();
    const html_req = await fetch(NEWSLETTER_URL);
    const html = await html_req.text()

    await sendEmail({
        to: to,
        bcc: maillist,
        subject: subject,
        html: html
    });

	return Response.redirect(new URL('/newsletter', request.url));
}