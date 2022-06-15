const Manager = require("../lib/manager");

describe("Manager", () => {

    it("creates a Manager object with employee and manager class variables, checks office number", () => {
        const manager = new Manager("Trent", 100, "trentdickson22@gmail.com", 69);
        // Only need to check the github if the employee.test.js checks the rest of the variables
        // ADD OFFICE NUMBER VARIABLE TO MANAGER CLASS
        expect(manager.getOffice()).toEqual(69);
    });

    it("get Manager role with getRole fxn", () => {
        const manager = new Manager("Trent", 100, "trentdickson22@gmail.com", 69);

        expect(manager.getRole()).toEqual("Manager");
    });

})