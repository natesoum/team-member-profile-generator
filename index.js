// Declare variable for libraries
const fs = require('fs');
const inquirer = require('inquirer');

// Questions 
const questions = [
    {
        type: 'confirm',
        name: 'addMember',
        message: 'Would you like to add a team member?',
        choices: ['Yes', 'No'],
        validate: memberInput => {
            if (memberInput) {
                return true;
            }
        }
    },
]

inquirer.prompt(questions);