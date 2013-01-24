
/**
 * Module dependencies.
 */

var express = require('express')
  , routeProvider = require("./routes/routeProvider")
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('domain', '33.33.33.33');
  app.set('port', process.env.PORT || 8000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

routeProvider.makeAllRoutes(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
