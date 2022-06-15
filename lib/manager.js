const Employee = require('./employee');

// employee + manager = manager 
class Manager extends Employee {
    constructor (name, id, email, office) {
        super (name, id, email); 
        this.office = office; 
        console.log(office);
    }
    getOffice() {
        return this.office;
    }
    getRole () {
        return "Manager";
    }
}

module.exports = Manager;
