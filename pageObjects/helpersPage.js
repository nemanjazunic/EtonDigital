export class HelpersPage {
  generateRandomString(length) {
    const crypto = require("crypto");

    const characters =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    const randomValues = crypto.randomBytes(length);
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = randomValues[i] % charactersLength;
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  generateRandomName(length) {
    const crypto = require("crypto");

    const characters =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    const randomValues = crypto.randomBytes(length);
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = randomValues[i] % charactersLength;
      result += characters.charAt(randomIndex);
    }

    return `LonChe${result}`;
  }

  generateRandomNumbers(length) {
    const crypto = require("crypto");

    const characters = "0123456789";
    const charactersLength = characters.length;
    const randomValues = crypto.randomBytes(length);
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = randomValues[i] % charactersLength;
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  generateRandomEmail() {
    const emailLength = 6;
    const randomString = Math.random()
      .toString(36)
      .substring(2, emailLength + 2);
    const domain = "argusdatainsights.ch";
    return `user+${randomString}@${domain}`;
  }

  generateRandomWebAddress() {
    const webAddressLength = 6;
    const randomString = Math.random()
      .toString(36)
      .substring(2, webAddressLength + 2);
    const domain = ".com";
    return `https://www.${randomString}${domain}`;
  }
}

export const onHelpersPage = new HelpersPage();
