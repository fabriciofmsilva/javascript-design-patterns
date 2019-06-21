class Sheep {
  name;
  category;

  constructor(name, category = 'Mountain Sheep') {
    this.name = name;
    this.category = category;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setCategory(category) {
    this.category = category;
  }

  getCategory() {
    return this.category;
  }
}

const original = new Sheep('Jolly');
console.log(original.getName()); // Jolly
console.log(original.getCategory()); // Mountain Sheep

// Clone and modify what is required
const cloned = Object.create(original);
cloned.setName('Dolly');
console.log(cloned.getName()); // Dolly
console.log(cloned.getCategory()); // Mountain sheep
