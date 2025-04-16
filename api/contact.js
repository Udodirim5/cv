// This file is not part of your Vite app — it's handled by Vercel as a serverless function

import { Resend } from 'resend';
import { myInfo } from '../data/data';

// eslint-disable-next-line
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'Your Name <onboarding@resend.dev>',
      to: myInfo.contact.email,
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });
    if (!response.ok) {
      throw new Error(response.message || "Something went wrong.");
    }
    
    console.log('✅ Email sent:', response.id);
    res.status(200).json({ success: true, message: 'Message sent!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send email.' });
    console.log(error)
  }
}
