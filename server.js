var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
var cookieParser = require("cookie-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cookieParser());
app.use(express.static("public"));
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

// app.get('/', function(req, res) {
//     console.log("Cookies: ", req.cookies)
//  })

// app.get('/index.html', function (req, res) {
//     res.sendFile( __dirname + "/" + "index.html" );
// })

// app.post('/public', function(req, res) {
//     console.log(req.files.multiInputFileName.name); // the uploaded file object
// });

// app.post("/upload", function (req, res) {
//   let sampleFile;
//   let uploadPath;
//   // console.log('req', req.files.sampleFile.name)

//   if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send("No files were uploaded.");
//   }

//   // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
//   sampleFile = req.files.sampleFile;
//   uploadPath = __dirname + "/public/uploaded/" + sampleFile.name;

//   // Use the mv() method to place the file somewhere on your server
//   sampleFile.mv(uploadPath, function (err) {
//     if (err) return res.status(500).send(err);

//     res.send("File uploaded!");
//   });
// });

// app.get('/process_get', function (req, res) {
//     // Prepare output in JSON format
//     response = {
//        first_name:req.query.first_name,
//        last_name:req.query.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
//  })

// app.post('/process_post', urlencodedParser, function (req, res) {
//     // Prepare output in JSON format
//     response = {
//        first_name:req.body.first_name,
//        last_name:req.body.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
//  })

// app.post('/',function(req,res){
//     console.log('req', req)
//     console.log('res', res)
//     res.send('Test Post')
// })

// app.delete('/delete',function(req,res){
//     console.log('req', req)
//     console.log('res', res)
//     res.send('Deleted')
// })

// app.get('/user', function (req, res) {
//     console.log("Got a GET request for /user");
//     res.send('Page Listing');
//  })
