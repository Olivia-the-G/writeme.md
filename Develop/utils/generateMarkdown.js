// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} ${data.getLicense}

## Description 
${data.description}

## Table of Contents

*[Installation](#-installation)
*[Usage](#-usage)
*[License](#-license)
*[Contributing](#-contributing)
*[Tests](#-tests)
*[Contact](#-contact)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is licensed under ${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions

If you would like to inquire about anything in this project, use the following information,
GitHub: [${data.github}](https://github.com/${data.github})
Email Address: ${data.email}
`;
}

module.exports = generateMarkdown;
