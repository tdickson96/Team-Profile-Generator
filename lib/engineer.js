const Employee = require("./employee");

// Employee + Engineer = ENGINEER
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github; 
        console.log(github);
    }
    getGithub () {
        return this.github;
    }
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer; 
