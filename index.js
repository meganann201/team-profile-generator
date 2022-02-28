const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const fs = require("fs");
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is your Id? (Required)",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter your Id!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "role",
      message: "What is your role?",
      choices: ["intern", "engineer", "manager"],
    },
  ]);
};

const promptRole = (teamData) => {
  if ((teamData.role = 0)) {
    return inquirer.prompt([
      {
        type: "input",
        name: "school",
        message: "What is the name of the school you are attending? (Required)",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("You need to enter a school name!");
            return false;
          }
        },
      },
    ]);
  } else if ((teamData.role = 1)) {
    return inquirer.prompt([
      {
        type: "input",
        name: "github",
        message: "What is your github username? (Required)",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("You need to enter a github name!");
            return false;
          }
        },
      },
    ]);
  } else {
    return inquirer.prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
    ]);
  }
};

promptUser()
  .then(promptRole)
  .then((teamData) => {
    return generatePage(teamData);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then((copyFileResponse) => {
    console.log(copyFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
