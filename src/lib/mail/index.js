import ow from 'ow';

class Mail {
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

    // TODO: do get
  }

  async send() {
    await this._maybeConnect();

    // TODO: do send
  }
}

module.exports = Mail;
