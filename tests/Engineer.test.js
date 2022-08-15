// Include Engineer 
const Engineer = require('../lib/Engineer');

//
describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing a github username", () => {
            const exampleEngineer = 'foodawg';
            const newEngineer = new Engineer('Nate', 9, 'a@a.com', 'foodawg');

            expect(newEngineer.github).toEqual(exampleEngineer);
        })
    })
});

describe("Engineer", () => {
    describe("Role", () => {
        it("should return a role of engineer", () => {
            const returnRole = 'Engineer';
            const newEngineer = new Engineer('Nate', 9, 'a@a.com', 'foodawg');

            expect(newEngineer.getRole()).toEqual(returnRole);
        })
    })
});

