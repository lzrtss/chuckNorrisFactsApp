<<<<<<< Updated upstream
import { ViewApp } from '/app/views/ViewApp.js';
import { ModelApp } from '/app/models/ModelApp.js';
=======
import { ViewApp } from 'app/views/ViewApp.js';
import { ModelApp } from 'app/models/ModelApp.js';
>>>>>>> Stashed changes

export class ControllerApp {
  constructor() {
    this.model = new ModelApp(this);
    this.view = new ViewApp(this);
  }

  getFactsNumber(e) {
    e.preventDefault();

    let factsNumber = Number(document.querySelector('#number').value);

    if (this.model.isWrongNumber(factsNumber)) {
      this.view.render(['Check your input - there should be an integer between 1 and 100!']);
    } else {
      this.model.getFacts(factsNumber);
    }

    document.querySelector('#number').value = '';
  }

  getFacts(facts) {
    this.view.render(facts);
  }
}