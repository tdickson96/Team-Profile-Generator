const Employee = require('./Employee');
// employee + manager = manager 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber; 
        console.log(officeNumber);
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    // override employee role to manager 
    getRole () {
        return "Manager";
    }
}

module.exports = Manager;
