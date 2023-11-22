import nodemailer from 'nodemailer'
export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)

    const body = await readBody(event)

    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Use your email service provider
        auth: {
            user: String(config.email), // Your email address
            pass: config.emailPass, // Your email password or an app-specific password
        },
        debug: true, 
        logger: true 
    });

    const mailOptions = {
        from: `"${body.name}" <${String(config.email)}>`, // Use the sender's name and email as the "from" address
        to: String(config.email), // Recipient's email address
        subject: 'Message from your website', // Subject of the email
        text: body.message, // Email body
        replyTo: `${body.name} <${body.email}>`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            // Handle the error (e.g., show an error message to the user)
        } else {
            console.log('Email sent:', info.response);
            // Email sent successfully
        }
    });

})