import ImapClient, { LOG_LEVEL_NONE } from 'emailjs-imap-client';

const imap = (server, port, user, pass) =>
  new ImapClient(server, port, {
    auth: {
      user,
      pass
    },
    logLevel: LOG_LEVEL_NONE
  });

const outlook = (user, pass) => imap('outlook.office365.com', 993, user, pass);

const gmail = (user, pass) => imap('imap.gmail.com', 993, user, pass);

const icloud = (user, pass) => imap('imap.mail.me.com', 993, user, pass);

const zoho = (user, pass) => imap('imap.zoho.com', 993, user, pass);

export { outlook, gmail, icloud, zoho };
