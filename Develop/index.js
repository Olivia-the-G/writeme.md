
// getting libraries
const fs = require('fs');

const inquirer = require('inquirer');

// link markdown js file
const generateMarkdown = require('./utils/generateMarkdown');

// validate user input 
function validateInput(value) {
  if (value != "") {
    return true;
  } else {
    return "Please provide some kind of input to answer the question.";
  }
};

// command line prompts
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?:',
    validate: validateInput
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
    validate: validateInput
  },

  // this is where the table of contents will be located

  {
    type: 'input',
    name: 'installation',
    message: 'Explain how to install your project:',
    validate: validateInput
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions on how to use your project:',
    validate: validateInput
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project:',
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Apache 2.0",
      "Boost Software 1.0",
      "MIT",
      "Mozilla",
      "NO LICENSE"
    ],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Explain how others can contribute to your project:',
    validate: validateInput
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please specify any testing instructions for your project:',
    validate: validateInput
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?:',
    validate: validateInput
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your GitHub email address so contributors can contact you:',
    validate: function (value) {
      // regular expression to make sure the input given matches the format of an email address
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return true;
      } else {
        return "Not a valid email address. Please enter a valid email address.";
      }
    }
  }
];

// write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
      console.log(err);
    }
  })
};

// initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data, null, " "));
    writeToFile("./demo/README.md", data);
  }
  )
};

init();

