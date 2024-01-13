const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'beverly.mraz49@ethereal.email',
        pass: 'jFech4k5jURGwkhxXZ'
    }
});

exports.sendMail = async (receiverMail) => {
    try {
        console.log(receiverMail)
        const info = await transporter.sendMail({
            from: '"hello I am abhishek" <abhisheksavaliya@gmail.com>',
            to: receiverMail,
            subject: 'hi',
            text: 'This is abhishek savaliya',
            html: '<b>Best of luck</b>',
        });

        return info.messageId
    } catch (error) {
        return error
    }
};


