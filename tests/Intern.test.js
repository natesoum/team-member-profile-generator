// Include Intern
const Intern = require("../lib/Intern");

// Compares school to exampleSchool and makes sure they are equal
describe("Intern", () => {
  describe("School", () => {
    it("should return an object that has equal value in school", () => {
      const exampleSchool = "UPENN";
      const exampleIntern = new Intern("Nate", 7, "nate@gmail.com", "UPENN");

      expect(exampleIntern.school).toEqual(exampleSchool);
    });
  });
});

// Compares role to exampleRole and makes sure they are equal
describe("Intern", () => {
  describe("Role", () => {
    it("should return a role of intern", () => {
      const returnRole = "Intern";
      const newEngineer = new Intern("Nate", 7, "nate@gmail.com", "UPENN");

      expect(newEngineer.getRole()).toEqual(returnRole);
    });
  });
});
