const Employee = require('../lib/Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getSchool() {
        return {
            school: this.school
        }
    }
    getRole() {
        return 'Intern'; 
    }
}


module.exports = Intern;