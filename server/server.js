var express = require('express');
var bodyParser = require('body-parser');
var couchbase = require('couchbase');
var path = require('path');
var config = require('./config');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports.bucket = (new couchbase.Cluster(config.couchbase.server)).openBucket(config.couchbase.bucket);
var cluster = new couchbase.Cluster(config.couchbase.server);
cluster.authenticate(config.couchbase.username, config.couchbase.password);
module.exports.bucket = cluster.openBucket(config.couchbase.bucket);

// IDK why we use this ----**** learn about this
// This is for placing frontend files in this directory. We'll see about this later
//app.use(express.static(path.join(__dirname, "public")));

var routes = require("./routes/routes.js")(app);

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});



// add a document to a bucket
// bucket.insert('document-key', { name: 'Matt', shoeSize: 13 }, function (err, result) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(result)
//   }
// })

// get all documents with shoe size 13
//var n1ql = 'SELECT d.* FROM `bucketName` d WHERE shoeSize = $1'
// var query = N1qlQuery.fromString('SELECT callsign FROM `travel-sample` LIMIT 5;')
// bucket.query(query, [13], function (err, result) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(result)
//   }
// })
