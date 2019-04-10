// we create 'users' collection in newdb database
var url = 'Mongodb://localhost:27017/firstDB';
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 
// make client connect to mongo service
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
    db.on('error', function(err){
        console.error("connection error;", error);
    });
    console.log("Switched to "+db.databaseName+" database");
 
    // document to be inserted
    var doc = { name: "Prasanna", age: "26" };
    
    // insert document to 'users' collection using insertOne
    db.collection("users").insertOne(doc, function(err, res) {
        if (err) throw err;
        console.log("Document inserted");
        // close the connection to db when you are done with it
        db.close();
    });
});