const Intern = require('../lib/Intern.js');

test('creates a school property', () => {
    const intern = new Intern('', '', '', 'Miami University');
  
    expect(intern.school).toBe('Miami University');
});

test("gets intern's role", () => {
    const intern = new Intern('Dave');
  
    expect(intern.getRole()).toHaveProperty('role');
  });

  test("gets intern's role", () => {
    const intern = new Intern('Dave');
  
    expect(intern.getSchool()).toHaveProperty('school');
  });