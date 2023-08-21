import express from 'express';
import fileUpload from 'express-fileupload'; 
import DatabaseRoute from './app/routes/database.routes.js'
import UserRoute from './app/routes/users.routes.js'
import BookRoute from './app/routes/books.routes.js'
import cors from 'cors'

var app = express();
app.use(express.json());
app.use(cors());
// var express = require("express");
// var fs = require("fs");
// var bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
// var cookieParser = require("cookie-parser");
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.use(cookieParser());
// app.use(express.static("public"));
// app.use(fileUpload());
// app.use(bodyParser.urlencoded({ extended: false }));

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
app.use("/api/books", BookRoute);

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Listening at http://%s:%s", host, port);
});