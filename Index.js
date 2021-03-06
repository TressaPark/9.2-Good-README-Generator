// inquirer set up
const inquirer = require("inquirer");

// api call
const fs = require("fs");
const util= require("util");
const apiCall = require("./api");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
// questions for user to answer
return inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "Enter your project title."
  },
  {
    type: "input",
    name: "description",
    message: "Enter your project description."
  }, 
  {
    type: "input",
    name: "motivation",
    message: "Enter the motivation for your project."
  }, 
  {
    type: "input",
    name: "contributors",
    message: "Who contributed to your project?"
  }, 
  {
    type: "input",
    name: "tech",
    message: "What technology was used for the project?"
  },
  {
    type: "input",
    name: "build",
    message: "Enter the build status of this project."
  },
  {
    type: "input",
    name: "license",
    message: "Enter the license name and link to the license content."
  },
  {
    type: "input",
    name: "tests",
    message: "Explain how to run the automated tests for this system."
  },
    {
      type: "input",
      name: "installations",
      message: "Enter the installation instructions for this program."
    },
    {
      type: "input",
      name: "credits",
      message: "Enter the credits for this project?"
    },
    {
      type: "input",
      name: "username",
      message: "Enter your Github username."
    },
    {
      type: "input",
      name: "email",
      message: "Enter your Github email."
    },
  ]);
}
promptUser().then(function(answer){
  apiCall.getUser(answer.username, answer);
});

// Thank you to my tutor Vivian Nguyen, Jill  Westerfelhaus, wikipedia.com, welcometothejungle.com, and my classwork at NU