const express = require("express");
const app     = express();
const path    = require("path");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


app.use("/", express.static("public"));

app.get("/find", (request, response) => {
	//console.log(request.query);
    var data = {
    	name: request.query.nombre,
    	sex: request.query.sexo,
    	message: request.query.mensaje,
    	hobbies: request.query.hobbies
    }
    response.json({"method": "get", "success": true, "data": data});
});

app.post("/find", (request, response) => {
    //console.log(request.body);
    var data = {
    	name: request.body.nombre,
    	sex: request.body.sexo,
    	message: request.body.mensaje,
    	hobbies: request.body.hobbies
    }
    response.json({"method": "post", "success": true, "data": data});
});

app.listen(8080, function() {
  console.log("Listening on port 8080!");
})