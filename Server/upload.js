const IncomingForm = require("formidable").IncomingForm;

//Function to export the callback function
//Used in server.js to register the route
//Used to send back response to the request
module.exports = function upload(req, res) {
  var form = new IncomingForm();

  //Callback for every file in the form
  //Uploaded files are stored in a temp. dir. on the machine
  //To do something with, copy using node.js file-system API
  form.on("file", (field, file) => {
    //Do something with the file
    //ex. save to DB
    //can access using file.path
  });

  //Called when form is completely parsed
  form.on("end", () => {
    res.json();
  });

  //Trigger the parsing form
  form.parse(req);
};
