export class ModelApp {
  constructor(contr) {
    this.controller = contr;
    this.api = 'http://api.icndb.com/jokes/random/';
    this.facts = [];
  }

  getFacts(factsNumber) {
    fetch(`${this.api}/${factsNumber}`).then(data => data.json()).then((data) => {
      if (data.type === 'success') {
        this.facts = data.value.map(e => e.joke);
      } else {
        this.facts.push('Something went wrong with API...');
      }

      this.controller.getFacts(this.facts);
    });
  }

  isWrongNumber(number) {
    if (!number || !(Number.isInteger(number)) || number < 0 || number > 100) {
      return true;
    }

    return false;
  }
}
