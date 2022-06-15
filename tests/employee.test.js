const Employee = require("../lib/employee");

describe("Employee", () => {

    it("makes an Employee object with name, identification, and email", () => {
        const employee = new Employee('Trent', 100, 'trentdickson22@gmail.com');

        expect(employee.name).toEqual('Trent');
        expect(employee.id).toEqual(100);
        expect(employee.email).toEqual('trentdickson22@gmail.com');
    });

    it("takes a string for the name from getName", () => {
        const employee = new Employee('Trent', 100, 'trentdickson22@gmail.com');

        expect(employee.getName()).toEqual('Trent');
    });

    it("takes a number for the identification from getId", () => {
        const employee = new Employee('Trent', 100, 'trentdickson22@gmail.com');

        expect(employee.getId()).toEqual(100);
    });

    it("takes a string for the email from getEmail", () => {
        const employee = new Employee('Trent', 100, 'trentdickson22@gmail.com');

        expect(employee.getEmail()).toEqual(employee.email.toString());
    });

    it("takes a role for the employee from getRole", () => {
        const employee = new Employee('Trent', 100, 'trentdickson22@gmail.com');

        expect(employee.getRole()).toEqual("Employee");
    });
    
})