import express from 'express'
var app = express();
import DatabaseRoute from './app/routes/database.routes.js'
import UserRoute from './app/routes/users.routes.js'

app.use(express.json())

// import fs from 'fs'
// var bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
// var cookieParser = require("cookie-parser");
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// import path from "path";


// app.use(cookieParser());
// app.use(Express.static("public"));
// app.use(fileUpload());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/database",DatabaseRoute);
app.use("/api/users", UserRoute);

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Listening at http://%s:%s", host, port);
});