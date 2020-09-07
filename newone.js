var express = require('express');
var app = express();

// Get MongoClient
var MongoClient = require('mongodb').MongoClient;

// db url, collection name and db name
const dburl = 'mongodb://127.0.0.1:27017/Results';
const dbname = 'Results';


// process root url '/'
app.get('/', function(req, res) {

  // connect to DB
  MongoClient.connect(dburl,{useUnifiedTopology:true},(err, client) => {
    if (err) {
        console.log(err);
    }

      // Get db
      const db = client.db(dbname);

      // Get collection
      const collection = db.collection(dbname);

      // Find all documents in the collection
      Model.getOne("htno", /* Here you should give any hall ticket no from your mongo db */).then(res => {
    console.log(res.json(())
})
        if (!err) {

          // write HTML output
          var output ='<html><head><title>Intermediate Results</title></head><style>.content { max-width: 500px; margin: auto;}</style><body>';  
			output += '<fieldset style="width:1000px"><div class="content"><legend align="center"></legend><h1>Intermediate Results</h1>';
		  output +='<form method="post" action="/">'
		  output +='<b>HallTicketNo:</b><input type="text/number" id="number">';
		  output +='<input type="button" value="Get Result">';
		  output +='</form></fieldset></div>';	
		
			var output = '<table border="1"><tr><td><b>' + 'htno' + '</b></td><td><b>' + 'Maths' + '</b></td><td><b>' + 'info.Physics' + '</b></td><td><b>' + 'info.Chemistry' + '</b></td></tr>';
        
          // process todo list
        

          // write HTML output (ending)
          output += '</body></html>'

          // send output back
          res.send(output);

          // log data to the console as well
          console.log(info);
        }
      });

      // close db client
      //client.close();
    }
  );
});

// listen on port 3000
app.listen(8080,() =>{
  console.log('Example app listening on port 8080!')
});
