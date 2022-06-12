const Employee = require('./Employee');

// EMPLOYEE + INTERN = INTERN 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 
        // school of study
        this.school = school; 
    }
    // school input
    getSchool () {
        return this.school;
    }
    // IF EMPLOYEE, THEN override with Intern role
    getRole () {
        return "Intern";
    }
}

module.exports = Intern; 
