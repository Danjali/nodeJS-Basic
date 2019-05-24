const cors = require("cors");
const express = require("express");
const postProjectData = require("../services/project");
const getEventData = require("../services/eventHandler");
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

  app.get('/api/getEventDetails', getEventData);

  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = appRouter;