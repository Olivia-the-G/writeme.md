
// license data lists to be accessed by the functions
const licenseList = {
  'GNU AGPLv3': 'https://img.shields.io/badge/License-GNU_AGPLv3-orange?style=flat-square&link=https%3A%2F%2Fwww.gnu.org%2Flicenses%2Fagpl-3.0.en.html',
  'GNU GPLv3': 'https://img.shields.io/badge/License-GNU_GPLv3-green?style=flat-square&link=https%3A%2F%2Fwww.gnu.org%2Flicenses%2Fgpl-3.0.en.html',
  'GNU LGPLv3': 'https://img.shields.io/badge/License-GNU_LGPLv3-purple?style=flat-square&link=https%3A%2F%2Fwww.gnu.org%2Flicenses%2Flgpl-3.0.en.html',
  'Apache 2.0': 'https://img.shields.io/badge/License-Apache_2.0-red?style=flat-square&link=https%3A%2F%2Fwww.apache.org%2Flicenses%2FLICENSE-2.0',
  'Boost Sofware': 'https://img.shields.io/badge/License-Boost_Software_1.0-blue?style=flat-square&link=https%3A%2F%2Fwww.boost.org%2FLICENSE_1_0.txt',
  'MIT': 'https://img.shields.io/badge/License-MIT-yellow?style=flat-square&link=https%3A%2F%2Fopensource.org%2Flicense%2Fmit%2F',
  'Mozilla': 'https://img.shields.io/badge/License-Mozilla-orange?style=flat-square&link=https%3A%2F%2Fwww.mozilla.org%2Fen-US%2FMPL%2F',
  'NO LICENSE': ''
};

const licenseSources = {
  'GNU AGPLv3': 'https://www.gnu.org/licenses/agpl-3.0.en.html',
  'GNU GPLv3': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
  'GNU LGPLv3': 'https://www.gnu.org/licenses/lgpl-3.0.en.html',
  'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
  'Boost Sofware': 'https://www.boost.org/LICENSE_1_0.txt',
  'MIT': 'https://opensource.org/license/mit/',
  'Mozilla': 'https://www.mozilla.org/en-US/MPL/',
  'NO LICENSE': ''
};

// use selected license to get information from both objects
function badgeURL(license) {
  return licenseList[license];
};

function badgeLink(license) {
  return licenseSources[license];
};

// generate license badge
function renderLicenseBadge(license) {
  // return empty string if no license was selected
  if (license === 'NO LICENSE') {
    return '';
  } else {
    return `[![License: ${license}](${badgeURL(license)})](${badgeLink(license)})`;
  }
};

// generate license section of the readme
function renderLicenseSection(license) {
  if (license === 'NO LICENSE') {
    return '';
  } else {
    return `This application is under the ${license} license. To see full license details, [click here](${badgeLink(license)})`;
  }
};

// generate markdown for the readme
function generateMarkdown(data) {
  return `
# ${data.title} ${renderLicenseBadge(data.license)}

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
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions

If you would like to inquire about anything in this project, use the following information,
- GitHub: [${data.github}](https://github.com/${data.github})
- Email Address: ${data.email}
`;
};

module.exports = generateMarkdown;
