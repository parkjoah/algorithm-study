class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "You are EXPELLED ! ! !";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies}`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce((total, curr) => total + curr, 0);
    return sum / this.scores.length;
  }
}

let firstStudent = new Student("colt", "steele");
firstStudent.fullName();
firstStudent.markLate();

firstStudent.scores;
