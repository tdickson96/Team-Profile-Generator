// CLASS
// EMPLOYEE CONSTRUCTOR
class Employee {
    constructor (name, id, email) {
        this.name = name;
        console.log(name);
        this.id = id;
        console.log(id);
        this.email = email
        console.log(email); 
    }

    // NAME INPUT
    getName() {
        return this.name;
    }

    // ID INPUT
    getId() {
        return this.id;
    }   

    // EMAIL INPUT
    getEmail() {
        return this.email;
    }

    // returning employee type 
    getRole() {
        return 'Employee'; 
    }
};

module.exports = Employee; 
