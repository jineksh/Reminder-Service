const nodemailer = require('nodemailer');
const {EMAIL_PASS , EMAIL_ID} = require('./serverconfig');

const sender = nodemailer.createTransport({
    service :'Gmail',
    auth : {
        user : EMAIL_ID,
        pass : EMAIL_PASS
    }
});

module.exports = sender;