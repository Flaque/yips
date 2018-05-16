import ow from 'ow';
import * as clients from './clients';
import fromMime from './from-mime';

const parseEmailJSFormat = emailjs => {
  const [body, uid, flags] = [emailjs['body[]'], emailjs.uid, emailjs.flags];
  const mail = fromMime(body);

  return {
    ...mail,
    ...{ flags, uid }
  };
};

export { clients };

export default class {
  constructor(client, user, pass) {
    ow(client, ow.function);
    this.client = client(user, pass);
    this._isConnectedOrConnecting = false;

    this.get = this.get.bind(this);
    this.send = this.send.bind(this);
    this._maybeConnect = this._maybeConnect.bind(this);
  }

  /**
   * Attempts to connect if we're not already attempting to
   * connect or are already connected.
   */
  async _maybeConnect() {
    if (this._isConnectedOrConnecting) {
      return null;
    }

    this._isConnectedOrConnecting = true;
    await this.client.connect();
  }

  async get() {
    await this._maybeConnect();

    const messages = await this.client.listMessages('INBOX', '1:2', [
      'uid',
      'flags',
      'body[]'
    ]);

    return messages ? messages.map(parseEmailJSFormat) : [];
  }

  async send() {
    await this._maybeConnect();

    // TODO: do send
  }
}
