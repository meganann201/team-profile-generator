
// employee constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // return name from input
    getName() {
        return {
            name: this.name
        }
    }
// return ID from input
    getId() {
        return {
            id: this.id
        }
    }

    // return email from input
    getEmail() {
        return {
            email: this.email
        }
    }

    //return employee role
    getRole(){
        return 'Employee'; 
    }
}

module.exports = Employee;