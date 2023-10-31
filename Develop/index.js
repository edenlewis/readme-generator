// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
const generateReadMe = ({title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions})=>
`# ${title}
${description}
## Installation Instructions
${installationInstructions}
## How To Use
${usageInformation}
## Contributions
${contributionGuidelines}
## How To Test
${testInstructions}

`

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your application:',
    },
    {
      type: 'input',
      name: 'installationInstrutions',
      message: 'How do you install your application? (please describe in detail)',
    },
    {
      type: 'input',
      name: 'usageInformation',
      message: 'What does your application do and how do you use it?',
    },
    {
      type: 'input',
      name: 'contributionGuidelines',
      message: 'Who and what contributed to your application?',
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const readMeContent = generateReadMe(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });
