const sgMail = require('@sendgrid/mail');

document.addEventListener('DOMContentLoaded', () => {
    const sendEmailButton = document.getElementById('send-email')

    sendEmailButton.addEventListener('click', () => {
        const emailName = document.getElementById('email-name').value;
        const emailAddress = document.getElementById('email-address').value;
        const emailMessage = document.getElementById('email-message').value;
        sgMail.setApiKey('')
        const msg = {
            to: 'cgcottier@gmail.com',
            from: emailAddress,
            subject: 'Personal Site Inquiry',
            text: `From ${emailName}: ${emailMessage}`,
        };
        sgMail
        .send(msg)
        .then(() => {}, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        });
    })
})