// import employee constructor
const Employee = require('../lib/Employee.js');

// manager constructor extends employee constructor 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
      }
      // return role: manager
    getRole() {
      return 'Manager'; 
    }
}


module.exports = Manager;