var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/land-records";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("land-records");
    dbo.createCollection("lands", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
