// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")

// fs.writeFile()

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "none"],
  },{


    
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response, error)=> {
if(error) throw error
writeToFile("README.md", generateMarkdown (response))
  })
}

// Function call to initialize app
init();
