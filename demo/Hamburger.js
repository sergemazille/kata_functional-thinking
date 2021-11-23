export class Hamburger {
  base = ['bread', 'lettuce', 'cheddar'];
  meat;
  supplements;

  constructor(meat = '', supplements = []) {
    this.meat = meat;
    this.supplements = supplements;
  }

  get ingredients() {
    return Object.values(this)
      .map(value => value)
      .flatMap(value => value);
  }

  get properties() {
    const { base, meat, supplements } = this;

    return {
      base,
      meat,
      supplements,
    };
  }

  static fromOrder({ meat, supplements }) {
    return new Hamburger(meat, supplements);
  }
}
