// import express from 'express';
// const express = require('express');
// const app = express();
// app.get('/', (req, res) => res.send('Hello World!'));
// app.listen(3000, () => console.log('Example app listening on port 3000!'));


// app.get("/url", (req, res, next) => {
//     res.json(["Tony","Lisa","Michael","Ginger","Food"]);
// })

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

// const server = app.listen(3000, function () {
//     console.log("app running on port.", server.address().port);
// });