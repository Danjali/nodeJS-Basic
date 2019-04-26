var faker = require("faker");
var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });

  app.post("/projects", function(req, res) {
    const data = ({
      description: "",
      key: "tempo_project",
      name: "tempo_project"
      });
    res.status(200).send(data);
  });

  const port = process.env.PORT || 5000;
  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/addProject', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

  app.post('/api/addProject', (req, res) => {
    console.log(req.body);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
  });

  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = appRouter;