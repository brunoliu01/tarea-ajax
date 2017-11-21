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
	console.log(request.query.nombre);
    console.log(request.query.sexo);
    console.log(request.query.mensaje);
    console.log(request.query.hobbies);
    response.json({"method": "get", "success": true});
});

app.post("/find", (request, response) => {
    console.log(request.body.nombre);
    console.log(request.body.sexo);
    console.log(request.body.mensaje);
    console.log(request.body.hobbies);
    response.json({"method": "post", "success": true});
});

app.listen(8080, function() {
    console.log("Listening on port 8080!");
})