// import employee constructor
const Employee = require('../lib/Employee.js');

// intern constructor extends employee constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    // return intern's school from input
    getSchool() {
        return {
            school: this.school
        }
    }
    // return role: intern
    getRole() {
        return 'Intern'; 
    }
}


module.exports = Intern;