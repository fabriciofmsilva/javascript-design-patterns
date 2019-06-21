// interface Door {
//   public function getDescription();
// }
class WoodenDoor {
  getDescription() {
    console.log('I am a wooden door');
  }
}

class IronDoor {
  getDescription() {
    console.log('I am an iron door');
  }
}

// interface DoorFittingExpert {
//     public function getDescription();
// }
class Welder {
  getDescription() {
    console.log('I can only fit iron doors');
  }
}

class Carpenter {
  getDescription() {
    console.log('I can only fit wooden doors');
  }
}

// interface DoorFactory {
//     public function makeDoor(): Door;
//     public function makeFittingExpert(): DoorFittingExpert;
// }
class WoodenDoorFactory {
  makeDoor() {
    return new WoodenDoor();
  }

  makeFittingExpert() {
    return new Carpenter();
  }
}

class IronDoorFactory {
  makeDoor() {
    return new IronDoor();
  }

  makeFittingExpert() {
    return new Welder();
  }
}

const woodenFactory = new WoodenDoorFactory();
const door = woodenFactory.makeDoor();
const expert = woodenFactory.makeFittingExpert();

door.getDescription();
expert.getDescription();

const ironFactory = new IronDoorFactory();
const ironDoor = ironFactory.makeDoor();
const ironExpert = ironFactory.makeFittingExpert();

ironDoor.getDescription();
ironExpert.getDescription();
