
/**
 * Module dependencies.
 */

var express = require('express');
var nunjucks = require('nunjucks');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

nunjucks.configure({
	autoescape: true,
	express: app
});
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

var submit_data = [
	{ 
	  title: "Shreya Ghoshal Official Website",
	  url: "http://shreya-ghoshal.in/",
	  user:"yashness",
	  timestamp:"2 mins ago..",
	  upvotes:"123",
	  category:"other"
	},{
	  title: "Success is a journey",
	  url: "http://http://yashness.com/",
	  user:"yashness",
	  timestamp:"8 mins ago..",
	  upvotes:"123",
	  category:"inspiration"
	},{
	  title: "Teamtwister Website",
	  url: "http://synapse.daiict.ac.in/teamtwister/",
	  user:"yashness",
	  timestamp:"2 mins ago..",
	  upvotes:"123",
	  category:"show"
	},{
	  title: "The walled city, revisiting roots !",
	  url: "http://vaibhavihdesai.blogspot.in/2013/12/the-walled-city-revisiting-roots.html",
	  user:"vaibhavi",
	  timestamp:"2 mins ago..",
	  upvotes:"123",
	  category:"other"
	}
];

app.get('/',function(req,res){
	res.render("views/index.html",{loginuser: "yashness",data:submit_data});
});

app.get('/user/:username',function(req,res){
	res.render("views/user.html",{username:req.params.username});
});
app.get('/world',function(req,res){
	res.render("views/world.html",{loginuser: "yashness",data:submit_data});
});
app.get('/show',function(req,res){
	res.render("views/show.html",{loginuser: "yashness",data:submit_data});
});
app.get('/tech',function(req,res){
	res.render("views/tech.html",{loginuser: "yashness",data:submit_data});
});
app.get('/ask',function(req,res){
	res.render("views/ask.html",{loginuser: "yashness",data:submit_data});
});
app.get('/inspire',function(req,res){
	res.render("views/inspiration.html",{loginuser: "yashness",data:submit_data});
});
app.get('/startups',function(req,res){
	res.render("views/startups.html",{loginuser: "yashness",data:submit_data});
});
app.get('/coding',function(req,res){
	res.render("views/coding.html",{loginuser: "yashness",data:submit_data});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
