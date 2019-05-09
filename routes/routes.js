const cors = require("cors");
const express = require("express");
const project = require("../services/project");
const port = process.env.PORT || 5000;
const appRouter = function (app) {
  const { createBitbucketAPI } = require('bitbucket-api-v2');
  const bitbucketApi = createBitbucketAPI();

  app.use(cors());
  app.use(express.json());

  app.get("/", function (req, res) {
    res.status(200).send("Welcome to our restful API");
  });

  app.get('/api/projects', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

  app.post('/api/addProject', (req, res) => {
    let received = project(req.body);
    res.send(
      `Received data: ${received}`,
    );
  });

  // postProjectData = (projectData) => {
  //   const requestPayload = projectData;
  //   const base64 = require('base-64'),
  //     username = 't.m.mahajan@gmail.com',
  //     password = 'Tej.12345';
  //     let headers={
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Basic ' + base64.encode(username + ':' + password)
  //   };
  //   Request.post({
  //     "headers": headers ,
  //     "url": "https://api.bitbucket.org/2.0/teams/shared_teamtest1/projects/",
  //     "body": JSON.stringify(requestPayload),
  // }, (error, response, body) => {
  //     if(error) {
  //         return console.dir(error);
  //     }
  //     if(response){
  //       return response;
  //     }
  //     console.dir(JSON.parse(body));
  // });
  // }

  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = appRouter;