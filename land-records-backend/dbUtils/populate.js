let MongoClient = require("mongodb").MongoClient;
var dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/./../.env" });
// console.log(process.env);
const url = `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.d5azx.mongodb.net/land-records?retryWrites=true&w=majority`;

// console.log("url = ", url);
// let url = "mongodb://localhost:27017/land-records";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db("land-records");
    let lands = [];
    for (let i = 1; i <= 100; i++) {
        lands.push({
            id: i,
            name: "Land " + i,
            area: "Area " + i,
            city: "City " + i,
            state: "State " + i,
            country: "Country " + i,
        });
    }
    dbo.collection("lands").insertMany(lands, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});
