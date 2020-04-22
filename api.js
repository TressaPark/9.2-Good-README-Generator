//create axios call
const axios = require("axios");
//const to generate markdown
const genMd = require("./markdown/generateMarkdown")
const api = {
  getUser(username,response) {
    axios.get(`https://api.github.com/users/${username}`)
    .then(function(github)  {
      //console log to get email and avatar
      //console.log(github.data.email);
      console.log(github.data.avatar_url);
      genMd.generateMarkdown(github,response)
      //look for errors
    }).catch(function(error) {
      if (error) {
        console.log (error)
      } 
      else {
        console.log ("Success!")
      }
    })
  }
  
};

module.exports = api;