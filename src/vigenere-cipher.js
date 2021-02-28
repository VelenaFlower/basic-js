class VigenereCipheringMachine {
  
  constructor(flag) {
    this.flag = flag != false;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error;
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let count = 0;

    for (let i = 0; i < message.length; i++) {
      const keyPosition = (i - count) % key.length;
      if (message[i] >= "A" && message[i] <= "Z") {
        result += String.fromCodePoint((message.codePointAt(i) + key.codePointAt(keyPosition)) % 26 + 65);
      } else {
        result += message[i];
        count++;
      }
    }

    if (!this.flag) {
      result = result.split("").reverse().join("");
    }

    return result;
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error;
    }

    key = key.toUpperCase();
    let result = "";
    let count = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const keyPosition = (i - count) % key.length;
      if (encryptedMessage[i] >= "A" && encryptedMessage[i] <= "Z") {
        result += String.fromCodePoint((encryptedMessage.codePointAt(i) + 26 - key.codePointAt(keyPosition)) % 26 + 65);
      } else {
        result += encryptedMessage[i];
        count++;
      }
    }

    if (!this.flag) {
      result = result.split("").reverse().join("");
    }

    return result;
  }
}

module.exports = VigenereCipheringMachine;
