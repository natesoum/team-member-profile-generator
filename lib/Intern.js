// Include Employee
const Employee = require("./Employee");

// Create class extending from Employee
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

// Export Intern
module.exports = Intern;
