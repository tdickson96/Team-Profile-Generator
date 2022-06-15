class Employee {
    constructor (name, id, email) {
        this.name = name;
        console.log(name);

        this.id = id;
        console.log(id);
        
        this.email = email
        console.log(email); 
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }   
    getEmail() {
        return this.email;
    } 
    getRole() {
        return 'Employee'; 
    }
};

module.exports = Employee; 
