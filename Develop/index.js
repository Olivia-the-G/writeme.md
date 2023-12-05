

// initialize variables
const fs = require('fs');

const inquirer = require('inquirer');

// link markdown js file
const generateMarkdown = require('./utils/generateMarkdown')

// validate user input
function validateInput(value) {
  if (value != "") {
    return true;
  } else {
    return "Please provide some kind of input to answer the question.";
  }
};


// questions for user input 
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
// This is where the table of contents will be located

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
    ],
    validate: validateInput
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

// take user input and provide url to their selected license
function getLicense(value) {
  if (value === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (value === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (value === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (value === "Boost Software 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (value === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
};

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
    data.getLicense = getLicense(data.license);
    writeToFile("./demo/README.md", data);
  }
  )
};

init();

