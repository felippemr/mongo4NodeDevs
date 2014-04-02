var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost/weather', function(err, db){
	if(err) throw err;

	var query = {"Wind Direction": {$lte:360,$gte:180}};
	var sort = [];
	var operator = {'inc': {'counter':1}};
	var options = {'State':true, "Wind Direction":true, "Temperature":true};

	db.collection('data').find(query, options).toArray( function(err, doc){
		
		if(err) throw err;
		if (!doc){
			console.log("There is no data...");
		}
		else{
			console.dir(doc)
		}
		return db.close();

	});
});




