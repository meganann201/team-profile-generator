const Engineer = require('../lib/Engineer.js');

test('creates a github property', () => {
    const engineer = new Engineer('', '', '', 'octocat');
  
    expect(engineer.github).toBe('octocat');
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Dave');
  
    expect(engineer.getRole()).toEqual('Engineer');
  });

  test("gets engineer's github", () => {
    const engineer = new Engineer('Dave');
  
    expect(engineer.getGithub()).toHaveProperty('github');
  });