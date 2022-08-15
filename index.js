// Include all libraries
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Include all employee type
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// Include output variables
const distDir = path.resolve(__dirname, "dist");
const outputPath = path.join(distDir, "team.html");
const generateTeam = require("./src/generateHTML.js");

teamArray = [];

function generateTeamMembers() {
  function createTeam() {
    inquirer
    // Starting question
      .prompt([
        {
          type: "list",
          message: "What type of employee would you like to add to your team?",
          name: "memberInput",
          choices: ["Manager", "Engineer", "Intern", "All members added!"],
        },
      ])
      .then(function (userInput) {
        // Switch case for each choice
        switch (userInput.memberInput) {
            // Adds manager if manager is selected
          case "Manager":
            addManager();
            break;
            // Adds engineer if engineer is selected
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            // Adds intern if engineer is selected
            addIntern();
            break;
            // Builds HTML page if user is done inputting members
          default:
            htmlBuilder();
        }
      });
  }

  function addManager() {
    inquirer
    // Manager questions
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's name?",
        },

        {
          type: "input",
          name: "managerId",
          message: "What is the manager's ID number?",
        },

        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email address?",
        },

        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the manager's office number?",
        },
      ])
      .then((data) => {
        const manager = new Manager(
          data.managerName,
          data.managerId,
          data.managerEmail,
          data.managerOfficeNumber
        );
        teamArray.push(manager);
        createTeam();
      });
  }

  function addEngineer() {
    inquirer
    // Engineer questions
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
        },

        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's ID number?",
        },

        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email address?",
        },

        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub username?",
        },
      ])
      .then((data) => {
        const engineer = new Engineer(
          data.engineerName,
          data.engineerId,
          data.engineerEmail,
          data.engineerGithub
        );
        teamArray.push(engineer);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
    // Intern questions
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
        },

        {
          type: "input",
          name: "internId",
          message: "What is the intern's ID number?",
        },

        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email address?",
        },

        {
          type: "input",
          name: "internSchool",
          message: "What school does the intern attend?",
        },
      ])
      .then((data) => {
        const intern = new Intern(
          data.internName,
          data.internId,
          data.internEmail,
          data.internSchool
        );
        teamArray.push(intern);
        createTeam();
      });
  }

  function htmlBuilder() {
    console.log(
      "Your custom team profiles have been created! Please visit the dist folder!"
    );

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8");
  }

  createTeam();
}

generateTeamMembers();
