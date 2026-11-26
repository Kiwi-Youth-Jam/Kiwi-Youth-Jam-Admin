import nodemailer from "nodemailer";

// @ts-ignore
import { SMTP_HOST, SMTP_USER, SMTP_PORT, SMTP_ADDRESS, SMTP_PASSWORD } from '$app/env/private';

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
    },
});

// @ts-ignore
export async function sendEmail(ctx) {
    try {
        const info = await transporter.sendMail({
            from: SMTP_ADDRESS,
            to: ctx.to,
            bcc: ctx.bcc ?? [],
            cc: ctx.cc ?? [],
            subject: ctx.subject,
            html: ctx.html
        });

        console.log("Message sent:", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}