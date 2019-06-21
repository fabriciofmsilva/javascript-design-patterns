class President {
  instance;

  constructor() {
    // Hide the constructor
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new President();
    }

    return this.instance;
  }

  clone() {
    // Disable cloning
  }

  wakeup() {
    // Disable unserialize
  }
}

president1 = President.getInstance();
president2 = President.getInstance();

console.log(president1 === president2); // true
