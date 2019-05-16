const cors = require("cors");
const express = require("express");
const postProjectData = require("../services/project");
var router = express.Router();

const port = process.env.PORT || 5000;
const appRouter = function (app) {
  const { createBitbucketAPI } = require('bitbucket-api-v2');
  const bitbucketApi = createBitbucketAPI();

  app.use(cors());
  app.use(express.json());
  app.use(router);
  app.get("/", function (req, res) {
    res.status(200).send("Welcome to our restful API");
  });

  app.get('/api/projects', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

  app.post('/api/addProject', postProjectData);

//   postProjectData = (projectData) => {
//     const requestPayload = projectData;
//     let temp ;
//     const base64 = require('base-64'),
//       username = 't.m.mahajan@gmail.com',
//       password = 'Tej.12345';
//       let headers={
//         'Content-Type': 'application/json',
//         'Authorization': 'Basic ' + base64.encode(username + ':' + password)
//     };
//     let url = "https://2a051b39-ee78-48c3-ae04-8df326acdd13.mock.pstmn.io/rest/api/2/issue/";
//     // let url = "https://api.bitbucket.org/2.0/teams/shared_teamtest1/projects/";
//     request.post({
//       "headers": headers ,
//       "url": url,
//       "body": JSON.stringify(requestPayload),
//   }, (error, response, body) => {
//       if(error) {
//           return console.dir(error);
//       }
//       // if(response){
//       temp = response.body;
//       //console.log(temp);
//         return response.body;
//       // }
//       console.dir(JSON.parse(body));
//   });
//   return temp;
//   }

  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = appRouter;