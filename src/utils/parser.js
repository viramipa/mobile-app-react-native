import { parseString } from 'xml2js';

class Parser {
  constructor() {
    this.data = {};
  }

  parse(xml) {
    return new Promise((resolve, reject) => {
      parseString(xml, (err, result) => {
        if (err) {
          reject(err);
        } else {
          this.data = result;
          resolve(this.data);
        }
      });
    });
  }

  getData() {
    return this.data;
  }
}

export default Parser;