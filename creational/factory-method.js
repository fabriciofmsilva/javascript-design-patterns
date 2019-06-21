// interface Interviewer {
//   public function askQuestions();
// }
class Developer {
  askQuestions() {
    console.log('Asking about design patterns');
  }
}

class CommunityExecutive {
  askQuestions() {
    console.log('Asking about community building');
  }
}

class HiringManager {
  takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}

class DevelopmentManager extends HiringManager {
  constructor() {
    super();
  }

  makeInterviewer() {
    return new Developer();
  }
}

class MarketingManager extends HiringManager {
  constructor() {
    super();
  }

  makeInterviewer() {
    return new CommunityExecutive();
  }
}

const devManager = new DevelopmentManager();
devManager.takeInterview();

const marketingManager = new MarketingManager();
marketingManager.takeInterview();