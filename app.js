const express = require("express");
const cors = require("cors");
const data = require("./data/cohorts");
const app = express();

function idQuery (data, id) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i];
    }
  }
  return null;
}

app.use(cors());

app.get("/", function (request, response) {
  response.json({data});
});

app.get("/:id", function (request, response) {
  var record = idQuery(data, request.params.id);
  if (!record){
    response.status(404).json({
      error: {
        message: "No Record Found"
      }
    });
  } else {
    response.json({data: record});
  }
});

app.listen(process.env.PORT||9000);
