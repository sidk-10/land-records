var MongoClient = require("mongodb").MongoClient;
var dotenv = require("dotenv");
dotenv.config();
const url = `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.d5azx.mongodb.net/land-records?retryWrites=true&w=majority`;

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("land-records");
    dbo.createCollection("lands", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
