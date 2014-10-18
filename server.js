var express = require('express');
var hbs = require('hbs');

var PORT = 8080;
var SITE_NAME = 'ctc2';

var campgnd = require('./ctc2');

function init()
{
	var app = express();

	app.set('view engine','html');
	app.set('views',__dirname + '/views');
	app.engine('html',hbs.__express);

	app.use(express.static(__dirname + '/public'));
	app.use(express.logger());	/* Don't log static files */
	app.use(app.router);

	app.get('/',campgnd.index);

	return app;
}

var app = init();

console.log('\033[32m + \033[39m ' +
                         'Starting ' + SITE_NAME + ' on port ' + PORT + '...');
app.listen(PORT);
