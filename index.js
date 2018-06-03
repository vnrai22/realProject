const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//external bodyparser middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//use Static pages
//app.use(express.static('public'));

//get html in nodejs
app.get('/index.html', function(req,res){
	res.sendFile(__dirname + "/" + "index.html");
});

app.get('/myStyle.css', function(req,res){
	res.sendFile(__dirname + "/" + "myStyle.css");
});


//Post Action HTML
app.post('/process_post', urlencodedParser, function(req,res){

	response = {
		first_name:req.body.first_name,
		last_name:req.body.last_name
   	};
	console.log(response);
	res.end(JSON.stringify(response));
});

//set server
app.listen(3000, function(req,res){
	console.log('server is running at 3000');
});
