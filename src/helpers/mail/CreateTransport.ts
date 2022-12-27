import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
export const transport = nodemailer.createTransport({
    host: process.env.CONFIG_MAIL_SMTP,
    port: Number(process.env.CONFIG_MAIL_PORT),
    auth: {
      user: process.env.CONFIG_MAIL_USER,
      pass: process.env.CONFIG_MAIL_PASS
    }
});