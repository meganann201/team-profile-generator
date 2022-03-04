// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const fs = require('fs'); 
const inquirer = require("inquirer");
const generatePage = require('./src/page-template');


// start with empty team array
const teamArray = []; 
// manager entry first, then manager can add other employees
const addManager = () => {
  return inquirer.prompt ([
      {
          type: 'input',
          name: 'name',
          message: 'Who is the team manager?', 
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log ("Please enter the manager's name!");
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'id',
          message: "Enter manager's ID",
          validate: nameInput => {
              if  (isNaN(nameInput)) {
                  console.log ("Please enter the manager's ID!")
                  return false; 
              } else {
                  return true;
              }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: "Enter manager's email",
      },
      {
          type: 'input',
          name: 'officeNumber',
          message: "Enter manager's office number",
          validate: nameInput => {
              if  (isNaN(nameInput)) {
                  console.log ('Please enter an office number!')
                  return false; 
              } else {
                  return true;
              }
          }
      }
  ])
  .then(managerInput => {
    //destructure
      const  { name, id, email, officeNumber } = managerInput; 
      const manager = new Manager (name, id, email, officeNumber);

      teamArray.push(manager); 
      console.log(manager); 
  })
};

const addEmployee = () => {
  console.log(`
  =================
  Add additional employees to your team
  =================
  `);

  return inquirer.prompt ([
      {
          type: 'list',
          name: 'role',
          message: "Please choose employee's role",
          choices: ['Engineer', 'Intern']
      },
      {
          type: 'input',
          name: 'name',
          message: "Enter employee's name.", 
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log ("Please enter an employee's name!");
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'id',
          message: "Enter employee's ID.",
          validate: nameInput => {
              if  (isNaN(nameInput)) {
                  console.log ("Please enter the employee's ID!")
                  return false; 
              } else {
                  return true;
              }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: "Enter employee's email.",
      },
      {
        // github needed for engineer only
          type: 'input',
          name: 'github',
          message: "Enter engineer's github.",
          when: (input) => input.role === "Engineer",
          validate: nameInput => {
              if (nameInput ) {
                  return true;
              } else {
                  console.log ("Please enter the employee's github username!")
              }
          }
      },
      { // school needed for intern only
          type: 'input',
          name: 'school',
          message: "Enter intern's school",
          when: (input) => input.role === "Intern",
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log ("Please enter the intern's school!")
              }
          }
      },
      { // add more employee's option
          type: 'confirm',
          name: 'confirmAddEmployee',
          message: 'Would you like to add more team members?',
          default: false
      }
  ])
  .then(employeeData => {
      // data for employee types 

      let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
      let employee; 

      // data for engineer
      if (role === "Engineer") {
          employee = new Engineer (name, id, email, github);

          console.log(employee);

          // data for intern
      } else if (role === "Intern") {
          employee = new Intern (name, id, email, school);

          console.log(employee);
      }

      // add new employee to team array
      teamArray.push(employee); 

      if (confirmAddEmployee) {
          return addEmployee(teamArray); 
      } else {
          return teamArray;
      }
  })

};


// generate HTML
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
      // if there is an error 
      if (err) {
          console.log(err);
          return;
      // when the profile has been created 
      } else {
          console.log("Your team profile has been successfully created! Please check out the index.html")
      }
  })
}; 

addManager()
.then(addEmployee)
.then(teamArray => {
  return generatePage(teamArray);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.catch(err => {
console.log(err);
});
