const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.square = [];
  }

  createSquare() {
    let abc = this.alphabet;
    for (let i = 0; i < abc.length; i++) {
      this.square[i] = abc.slice(i).concat(abc.slice(0, i));
    }
  }

  generateKey(message, key) {
    for (let i = 0; i < Math.ceil(message.length / key.length) - 1; i++) {
      key = key.concat(key);
    }
    key = key.concat(key.slice(0, message.length - key.length));
    return key;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    if (message.length !== key.length) key = this.generateKey(message, key);

    key = key.toUpperCase();
    this.createSquare();

    let abc = this.alphabet;
    let m = message.toUpperCase().split('');
    let mf = m.filter(e => abc.includes(e) && e);
    let output = [];

    for (let i = 0, t = 0; i < m.length; i++) {
      if (abc.includes(m[i])) {
        output[i] = this.square[abc.indexOf(mf[t])][abc.indexOf(key[t])];
        t++;
      } else {
        output[i] = m[i];
      }
    }

    return this.type ? output.join('') : output.reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    if (message.length !== key.length) key = this.generateKey(message, key);

    key = key.toUpperCase();
    this.createSquare();

    let abc = this.alphabet;
    let m = message.toUpperCase().split('');
    let mf = m.filter(e => abc.includes(e) && e);
    let output = [];

    for (let i = 0, t = 0; i < m.length; i++) {
      if (abc.includes(m[i])) {
        // const a = abc.indexOf(key[t]);
        // const b = this.square[a].indexOf(mf[t]);
        // output[i] = abc[b];
        output[i] = abc[this.square[abc.indexOf(key[t])].indexOf(mf[t])];
        t++;
      } else {
        output[i] = m[i];
      }
    }
    return this.type ? output.join('') : output.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
