// EMPLOYEE MODULE 
const Employee = require("./Employee");
// EMPLOYEE + ENG CONSTRUCTOR = ENGINEER
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // CALL EMPLOYEE CONSTRUCTOR
        super(name, id, email);
        this.github = github; 
    }

    // GITHUB INPUT
    getGithub () {
        return this.github;
    }

     // if employee and engineer, then override employee to be engineer
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer; 
