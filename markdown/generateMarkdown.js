//creating questions that will gather user input to generate readme

//NEED TO DO THIS https://guides.github.com/features/mastering-markdown/
//FINISH MARK DOWN SYNTAX, app works. need to continue
var fs = require("fs")
const genResponse = {

  generateMarkdown(github, response) {
   const userInfo =  `
# ${response.title} ![Image of Badge](https://img.shields.io/badge/ReadMeGenrator-v1.0-green) 

![Image of TressaPark](${github.data.avatar_url})


# ReadMe
## Table of Contents
* [Project Title] (#project-title)
* [Description] (#description)
* [Motivation] (#motivation)
* [Contributors] (#contributors)
* [Tech Used] (#tech-used)
* [Build Status] (#build-status)
* [License] (#license)
* [Tests] (#tests)
* [Installations] (#installations)
* [Credits] (#credits)
* [Contact] (#contact)

## Project Title
<p><input type="text" name="title" value="">${response.title}</p>

## Description
<p><input type="text" name= "description" value="">${response.description}</p>

## Motivation
<p><input type="text" name= "motivation" value="">${response.motivation}</p>

## Contributors
<p>Contributor or contributors for this project are <input type="text" name="contributors" value="">${response.contributers}</p>

## Tech Used
<p>Tech used for this project is <input type="text" name="tech" value="">${response.tech}</p>

## Build Status
<p>Build status for this project is <input type="text" name="build" value="">${response.build}</p>

## License
<p>License for this project is <input type="text" name="license" value ="">${response.license}</p>

## Tests
<p><input type="text" name="tests" value="">${response.tests}</p>

## Installations
<p><input type="text" name="installations" value="">${response.installations}</p>

## Credits
<p><input type="text" name="credits" value="">${response.credits}</p>

## Contact
<p>Please feel free to email <input type="text" name="email" value="">${response.email} if you have additional questions.  Thank you.</p>
`
//console.log("function works")
//write file to markdown folder
//console.log(userInfo);
fs.writeFile("README.md",userInfo,function(err) {
  if (err) {
    return console.log(err)
  }
console.log ("Success!")
}) 

  }
}
module.exports = genResponse;