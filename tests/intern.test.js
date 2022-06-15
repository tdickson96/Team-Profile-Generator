const Intern = require("../lib/intern");

describe("Intern", () => {

    it("creates an Intern object", () => {
        const intern = new Intern("Trent", 100, "trentdickson22@gmail.com", "UofT");

        expect(intern.school).toEqual("UofT");
    });

    it("gets github value", () => {
        const intern = new Intern("Trent", 100, "trentdickson22@gmail.com", "UofT");

        expect(intern.getSchool()).toEqual("UofT");
    });

    it("gets role of Intern", () => {
        const intern = new Intern("Trent", 100, "trentdickson22@gmail.com", "UofT");

        expect(intern.getRole()).toEqual("Intern");
    });

})