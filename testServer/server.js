var express = require('express')
var cors = require('cors')
var app = express()

const port = 3001;
app.use(cors());

app.listen(port, (err) => {
	if (err) {
    return console.log("Error: ", err);
  }
	console.log("Server is listening on port " + port);
})

app.get("/api", (req, res) => {
	if (req.headers.authorization !== "admin:admin") {
	  return res.status(401).send();
	} else {
		res.send({method: "GET",
		body:{
			"name":"admin",
			"password":"admin",
			"email":"admin@admin.com",
			"age":"19"
		}});
	}
});

app.post("/api", (req, res) => {
	if (req.headers.authorization !== 'username:password') {
	  return res.status(401).send();
	} else {
		res.send({method: "POST"});
	}
});

app.put("/api/:id", (req, res) => {
	if (req.headers.authorization !== 'username:password') {
	  return res.status(401).send();
	} else {
		res.send({method: "PUT"});
	}
});

app.delete("/api/:id", (req, res) => {
	if (req.headers.authorization !== 'username:password') {
	  return res.status(401).send();
	} else {
		res.send({method: "DELETE"});
	}
});