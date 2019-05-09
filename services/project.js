const Request = require("request");
 
 const postProjectData = (projectData) => {
    const requestPayload = projectData;
    const base64 = require('base-64'),
      username = 't.m.mahajan@gmail.com',
      password = 'Tej.12345',
      headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(username + ':' + password)
        };
    Request.post({
      "headers": headers ,
      "url": "https://api.bitbucket.org/2.0/teams/shared_teamtest1/projects/",
      "body": JSON.stringify(requestPayload),
  }, (error, response, body) => {
      console.log('-------------------------',response);
    //   console.log(body);
      if(error) {
          return console.dir(error);
      }
      if(response){
        return response;
      }
      console.dir(JSON.parse(body));
  });
  }
 module.exports = postProjectData;