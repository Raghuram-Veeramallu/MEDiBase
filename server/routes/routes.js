var RecordModel = require("../models/recordmodel");

var appRouter = function(app) {

  app.post("/api/sendRecords", function(req, res){
    if (!req.body.patientUID) {
      return res.status(400).send({"status": "error", "message": "PatientID is required for the documents"});
    }
    if (!req.body.year){
      return res.status(400).send({"status": "error", "message": "Require a particular year to use this call"});
    }
    if (!req.body.data){
      return res.status(400).send({"status": "error", "message": "Require data to use this call"});
    }
    RecordModel.addData(req.body.patientUID, req.body.year, req.body.data, function(error, result){
      if(error) {
        return res.status(400).send(error);
      }
      res.send(result);
    });
  });

  app.post("/api/displayAll", function(req, res) {
    if (!req.body.patientUID) {
      return res.status(400).send({"status": "error", "message": "PatientID is required for the documents"});
    }
    RecordModel.getAllDetails(req.body.patientUID, function(error, result) {
        if(error) {
            return res.status(400).send(error);
        }
        res.send(result);
    });
  });

  app.post("/api/forPdfGenerator", function(req, res) {
    if (!req.body.patientUID) {
      return res.status(400).send({"status": "error", "message": "PatientID is required for the documents"});
    }
    RecordModel.getDataForPdf(req.body.patientUID, function(error, result) {
        if(error) {
            return res.status(400).send(error);
        }
        res.send(result[0].years);
    });
  });

  app.post("/api/patientRecords", function(req, res) {
    if (!req.body.patientUID) {
      return res.status(400).send({"status": "error", "message": "PatientID is required for the documents"});
    }
    if (!req.body.year){
      return res.status(400).send({"status": "error", "message": "Require a particular year to use this call"});
    }
    RecordModel.getPatientRecords(req.body.patientUID, req.body.year, function(error, result){
      if (error){
        return res.status(400).send(error);
        console.log(error);
      }
      res.send(result[0].lessons);
    });
  });

  app.post("/api/allYears", function(req, res) {
    if (!req.body.patientUID) {
      return res.status(400).send({"status": "error", "message": "Patient UID is required for the documents"});
      console.log("error");
    }
    RecordModel.getAllYears(req.body.patientUID, function(error, result){
      if (error){
        return res.status(400).send(error);
        console.log(error);
      }
      res.send(result[0].all_years);
    });
  });

};

module.exports = appRouter;
