const Manager = require('../lib/Manager.js');

test('creates an officeNumber property', () => {
    const manager = new Manager('', '', '', '1112224444');
  
    expect(manager.officeNumber).toBe('1112224444');
});

test("gets manager's role", () => {
    const manager = new Manager('Dave');
  
    expect(manager.getRole()).toEqual('Manager');
  });