// import employee constructor
const Employee = require('../lib/Employee.js');

//engineer constructor extends employee constructor
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    //return github username from input
    getGithub() {
        return {
            github: this.github
        }
    }
//return role: engineer
    getRole() {
        return 'Engineer'; 
    }
}

module.exports = Engineer;