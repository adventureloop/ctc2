var fs = require('fs');
var Feed = require('feed');

var markdown = require('markdown').markdown;

function loadfile(filename)
{
	if(fs.statSync(filename).isFile())
		return fs.readFileSync(filename,'utf8');
	else
		return undefined;
}

exports.index = function(req,res,next)
{
	res.render('index',
		{
			'recent':undefined
		}
	);
}

/*
exports.feed = function(req,res,next)
{
	console.log("FEEEEEEEEEEEEEEEEEEEEED");
	var tag = req.params.id;
	var posts = blogposts;

	// Initializing feed object
	var feed = new Feed(
		{
			title:'campGND',
			description:'Scotlands First Hacker Camp',
			link:'http://campGND.com/',
			image:'http://campGND.com/',
			copyright:'Copyright © 2014 57 North Hacklab',

			author: {
				name:'Tom Jones',
				email:'jones@sdf.org',
				link:'http://adventurist.me/'
			}
		}
	);

	if(tag == undefined) {
		feed.addCategory('All');
	} else {
		feed.addCategory(tag);
		posts = postsForTag(tag);
	}

	for(var key in posts) {
		var date = new Date(posts[key].date);
		feed.addItem(
			{
				title:posts[key].title,
				link:"http://adventurist.me/posts/" + posts[key].permalink + '/',
				description:posts[key].preview,
				content:posts[key].preview,
				date:date
			}
		);
	}

	res.set('Content-Type', 'text/xml; charset=utf-8');
	res.send(feed.render('rss-2.0'));
}

*/
