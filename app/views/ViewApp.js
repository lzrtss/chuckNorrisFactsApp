export class ViewApp {
  constructor(contr) {
    this.controller = contr;
    this.dom = document.querySelector('.facts');
    this.btn = document.querySelector('.btn');

    this.btn.addEventListener('click', this.controller.getFactsNumber.bind(this.controller));
  }

  render(facts) {
    let output = '';

    facts.forEach(fact => {
      output += `<li>${fact}</li>`;
    });

    this.dom.innerHTML = output;
  }
}