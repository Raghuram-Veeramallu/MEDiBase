var uuid = require("uuid");
var db = require("../server").bucket;
var config = require("../config");
var N1qlQuery = require('couchbase').N1qlQuery;

function RecordModel() { };

RecordModel.getAllDetails = function(patientUID, callback) {
    //var statement = "SELECT META(users).id, firstname, lastname, email " +
    //                "FROM `" + config.couchbase.bucket + "` AS users";
    var statement = 'SELECT * ' + 'FROM `' + config.couchbase.bucket + '` use keys "' + patientUID + '";';
    var query = N1qlQuery.fromString(statement);
    db.query(query, function(error, result) {
        if(error) {
            return callback(error, null);
        }
        callback(null, result);
    });
};

RecordModel.getPatientRecords = function(patientUID, year , callback){
  var statement = 'select years[0].records from `' + config.couchbase.bucket + '` use keys "' + patientUID + '" where any yr in ' + config.couchbase.bucket + '.years satisfies yr.year = ' + year + ' end;';
  var query = N1qlQuery.fromString(statement);
  db.query(query, function(error, result) {
    if (error) {
      return callback(error, null);
      console.log(error);
    }
    callback(null, result);
  });
};

RecordModel.getAllYears = function(patientUID, callback){
  var statement = 'select array yr.year for yr in ' + config.couchbase.bucket + '.years end as all_years from ' + config.couchbase.bucket + ' use keys "' + patientUID + '" where years is not null;';
  var query = N1qlQuery.fromString(statement);
  db.query(query, function(error, result) {
    if (error) {
      return callback(error, null);
      console.log(error);
    }
    callback(null, result);
  });
};


module.exports = RecordModel;
