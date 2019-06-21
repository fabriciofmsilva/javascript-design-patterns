// interface Door {
//   public function getWidth(): number;
//   public function getHeight(): number;
// }
class WoodenDoor {
  height;
  width;

  constructor(width, height) {
    this.height = height;
    this.width = width;
  }

  get height() {
    return this.height;
  }

  get width() {
    return this.width;
  }
}

class DoorFactory {
  static makeDoor(width, height) {
    return new WoodenDoor(width, height);
  }
}

const door = DoorFactory.makeDoor(100, 200);
console.log('Width:', door.width)
console.log('Height', door.height)

const door2 = DoorFactory.makeDoor(50, 100);