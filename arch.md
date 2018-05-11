# v0.1.0

This first working version will probably not be great for real human use.

## Working features:

* Only supports outlook by hard-coding SMTP and IMAP info
* Shows you only one email (no see messages screen)
* Asks for your username and password every time (no info saving)
* Lets you send the most basic of emails
* Parses HTML only minimally. No text formatting or anything, just `$(html).text()` or whatnot.

## User flow

1.  User types `yip` in terminal.
2.  User is prompted to type user/pass.
3.  User is asked if they would like to view an email or send one.
4.  If they pick view, then show them a single email. Only option for them to leave is ctrl-c at this point.
5.  If they pick send, then prompt them for subject, to, and then message body. Press send at the end.

## Screens

Prompt

```
Welcome to Yip, please enter your Outlook email and password.
Username: <User enters here>
Password: <Then they get prompted here>
```

Select one email or another

```
Read
-------
Compose
```

Read an email

```
~ We should get Coffee!
fuzzjazz@example.com

body goes here text yes
okay cool
dope yay
```

Compose

```
to: <prompt email>
subject: <prompt subject>
body: <prompt long email (press ctrl-s or something to send)>
```

## Modules

### mail

The main abstraction for interacting with email logic. Wraps SMTP and IMAP into one tool.

```js
// Constructor
const mail = new Mail(client, user, pass); // where client is something like Mail.outlook, Mail.gmail, ect

// Get
mail.get(); // Returns a list of parsed mail objects
mail.get(offset, count); // Gets `count` number of emails at `offset`

// Send
mail.send(to, subject, body); // Body is ANSI formatted string, not HTML. (mail should handle the conversion that)
```

#### Submodules

* **from-html** - Converts HTML to ANSI text.
* **to-html** - Converts ANSI text to HTML.
* **from-mime** - Parses a [MIME](https://en.wikipedia.org/wiki/MIME) into an easily usable json object. Really just a wrapper around emailjs.
* **to-mime** - Converts a mail object into a MIME.
* **clients** - a collection prefab imap and smtp clients for various email providers.
