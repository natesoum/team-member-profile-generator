// Include Manager
const Manager = require('../lib/Manager');

// Managers exclusively have office number
describe("Manager", () => {
    describe("Initialization", () => {
        it("should have an object that has a office number", () => {
            const exampleOfficeNumber = 2;
            const exampleManager = new Manager('Nate', 4, 'manager@test.com', 2);

            expect(exampleManager.officeNumber).toEqual(exampleOfficeNumber);
        })
    })
});

describe("Manager", () => {
    describe("Role", () => {
        it("should return a role of Manager", () => {
            const returnRole = 'Manager';
            const newManager = new Manager('Nate', 4, 'manager@test.com', 2);

            expect(newManager.getRole()).toEqual(returnRole);
        })
    })
});