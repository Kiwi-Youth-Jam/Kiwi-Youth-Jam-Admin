export async function GET({ request }) {
    let maillist: string[] = [
        'drew@drewfitzgerald.co.nz'
    ];

	return Response.json(maillist);
}