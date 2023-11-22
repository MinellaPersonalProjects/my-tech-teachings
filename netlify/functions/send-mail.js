import { createTransport } from 'nodemailer';

export async function handler(event) {
  // Parse the JSON string
  const { name, email, message } = JSON.parse(event.body);
  const config_email = process.env.NUXT_EMAIL

  // Create a transporter object using the default SMTP transport
  let transporter = createTransport({
    port: 587,
    secure: false, // true for 465, false for other ports
    service: 'Gmail', // Use your email service provider
    auth: {
        user: config_email, // Your email address
        pass: process.env.NUXT_EMAIL_PASS, // Your email password or an app-specific password
    },
    debug: true, 
    logger: true 
  });

  // Send mail with defined transport object
  try {
    let info = await transporter.sendMail({
      from: `"${name}" <${String(config_email)}>`, // Sender address
      to: email, // List of receivers
      subject: 'Message from your website', // Subject line
      text: message, // Plain text body
      replyTo: `${name} <${email}>`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent", id: info.messageId }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
