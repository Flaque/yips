const mailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const outlook = (user, pass) => {
  return mailer.createTransport(
    smtpTransport({
      service: 'hotmail',
      auth: {
        user,
        pass
      }
    })
  );
};

const send = (transport, email) => {
  transport.sendMail(email, (err, info) => {
    if (err) throw err;

    console.log(info);
  });
};

module.exports = { send, outlook };
