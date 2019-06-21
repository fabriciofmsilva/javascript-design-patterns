class Burger {
  size;

  cheese = false;
  pepperoni = false;
  lettuce = false;
  tomato = false;

  constructor(builder) {
    this.size = builder.size;
    this.cheese = builder.cheese;
    this.pepperoni = builder.pepperoni;
    this.lettuce = builder.lettuce;
    this.tomato = builder.tomato;
  }
}

class BurgerBuilder {
    size;

    cheese = false;
    pepperoni = false;
    lettuce = false;
    tomato = false;

    constructor(size) {
      this.size = size;
    }

    addPepperoni() {
      this.pepperoni = true;
      return this;
    }

    addLettuce() {
      this.lettuce = true;
      return this;
    }

    addCheese() {
      this.cheese = true;
      return this;
    }

    addTomato() {
      this.tomato = true;
      return this;
    }

    build() {
      return new Burger(this);
    }
}

const burger = new BurgerBuilder(14)
  .addPepperoni()
  .addLettuce()
  .addTomato()
  .build();
