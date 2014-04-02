var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost/weather', function(err, db){
	if(err) throw err;

	var query = {"Wind Direction": {$lte:360,$gte:180}};
	var sort = [];
	var operator = {'inc': {'counter':1}};
	var options = {'State':true, "Wind Direction":true, "Temperature":true};

	db.collection('data').find(query, options).toArray( function(err, docs){
		
		if(err) throw err;

		if (!docs){
			console.log("There is no data...");
		}
		else{
			var state = ""
			docs.forEach(function(doc){
				if (state != doc.State){
					state = doc.State
					console.log(doc);
				}
			});
		}
		return db.close();

	});
});




