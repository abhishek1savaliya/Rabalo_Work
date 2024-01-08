require('dotenv').config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const verifySid = process.env.VERIFY_SID;

const client = require("twilio")(accountSid, authToken);

exports.sendOTP = async (phone) => {
    try {
        const verification = await client.verify.v2
            .services(verifySid)
            .verifications.create({ to: `+91${phone}`, channel: "sms" });
        return verification.status

    } catch (error) {
        console.error("Error sending OTP:", error);
    }
};

exports.verifyOTP = async (phone, otp) => {
    try {

        const verificationCheck = await client.verify.v2.services(verifySid)
            .verificationChecks.create({ to: `+91${phone}`, code: otp });

        return verificationCheck.status
    } catch (error) {
        console.error("Error verifying OTP:", error.message);
    }
};


