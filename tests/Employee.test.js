const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Dave', '123', 'user@email.com');
  
    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('user@email.com');
});

test("gets employee's role", () => {
    const employee = new Employee('Dave');
  
    expect(employee.getRole()).toHaveProperty('role');
  });