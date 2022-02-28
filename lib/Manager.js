const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
      }
    getRole() {
      return {
        role: 'manager'
    }
    }
}


module.exports = Manager;