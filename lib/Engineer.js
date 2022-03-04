const Employee = require('../lib/Employee.js');


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getGithub() {
        return {
            github: this.github
        }
    }

    getRole() {
        return 'Engineer'; 
    }
}

module.exports = Engineer;