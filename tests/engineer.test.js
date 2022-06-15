const Engineer = require("../lib/engineer");

describe("Engineer", () => {

    it("creates an Engineer object with Employee class variables and Engineer class variables", () => {
        const engineer = new Engineer("Trent", 100, "trentdickson22@gmail.com", "tdickson96");
        // Only need to check the github if the employee.test.js checks the rest of the variables
        expect(engineer.github).toEqual("tdickson96");
    });

    it("gets engineer github value", () => {
        const engineer = new Engineer("Trent", 100, "trentdickson22@gmail.com", "tdickson96");

        expect(engineer.getGithub()).toEqual(engineer.github.toString());
    });

    it("gets role of Engineer", () => {
        const engineer = new Engineer("Trent", 100, "trentdickson22@gmail.com", "tdickson96");

        expect(engineer.getRole()).toEqual("Engineer");
    });

})