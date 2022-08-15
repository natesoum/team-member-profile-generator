// Include Employee 
const Employee = require('../lib/Employee');

// Compares Name to Employee Name and make sure they are equal
describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing a name", () => {
            const exampleEmployee = 'Leo'; 
            const newEmployee = new Employee('Leo', 5, 'a@a.com');

            expect(newEmployee.name).toEqual(exampleEmployee);
        })
    })
});

// Compares ID to Employee ID and make sure they are equal
describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing a id number", () => {
            const exampleEmployee = 8; 
            const newEmployee = new Employee('Leo', 8, 'a@a.com');

            expect(newEmployee.id).toEqual(exampleEmployee);
        })
    })
});

// Compares Email to Employee Email and make sure they are equal
describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing a email address", () => {
            const exampleEmployee = 'a@a.com'; 
            const newEmployee = new Employee('Leo', 5, 'a@a.com');

            expect(newEmployee.email).toEqual(exampleEmployee);
        })
    })
});