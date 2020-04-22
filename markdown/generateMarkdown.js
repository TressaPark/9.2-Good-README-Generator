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
<ul>
<li><a href="#title">Project Title</a></li>
<li><a href="#description">Description</a></li>
<li><a href="#motivation">Motivation</a></li>
<li><a href="#contributors">Contributors</a></li>
<li><a href="#tech">Tech Used</a></li>
<li><a href="#build">Build Status</a></li>
<li><a href="#license">License</a></li>

<li><a href="#installations">Installations</a></li>
<li><a href="#credits">Credits</a></li>
<li><a href="#contact">Contact for Further Information</a></li>
<br>
<h2 id="title">Project Title</h2>
<p><input type="text" name="title" value="">${response.title}</p>
<h2 id="description">Description</h2>
<p><input type="text" name= "description" value="">${response.description}</p>
<h2 id="contributors">Contributors</h2>
<p>Contributor or contributors for this project are <input type="text" name="contributors" value="">${response.contributers}</p>
<h2 id="tech">Tech Used</h2>
<p>Tech used for this project is <input type="text" name="tech" value="">${response.tech}</p>
<h2 id="build">Build Status</h2>
<p>Build status for this project is <input type="text" name="build" value="">${response.build}</p>
<h2 id="license">License</h2>
<p>License for this project is <input type="text" name="license" value ="">${response.license}</p>
## Tests: ${response.tests}
<h2 id="installations">Installations</h2>
<p><input type="text" name="installations" value="">${response.installations}</p>
<h2 id="credits">Credits</h2>
<p><input type="text" name="credits" value="">${response.credits}</p>
<h2 id="contact">Contact for Additional Questions</h2>
<p>Please feel free to email <input type="text" name="email" value="">${response.email} if you have additional questions.  Thank you.</p>
`
//console.log("function works")
//write file to markdown folder
console.log(userInfo);
fs.writeFile("README.md",userInfo,function(err) {
  if (err) {
    return console.log(err)
  }
console.log ("Success!")
}) 

  }
}
module.exports = genResponse;