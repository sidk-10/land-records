const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();
app.use(express.json());
const port = 3000;

const uri = "mongodb://localhost:27017/land-records";
const client = new MongoClient(uri);

app.get("/api/lands", async (req, res) => {
    await client.connect();
    try {
        await client
            .db("land-records")
            .collection("lands")
            .find({})
            .toArray((err, results) => {
                if (err) throw err;
                res.json({ data: results });
            });
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
});

app.post("/api/lands", async (req, res) => {
    await client.connect();
    try {
        // console.log(req);
        await client
            .db("land-records")
            .collection("lands")
            .insertOne(req.body.land);
        res.json({ status: "success", land: req.body.land });
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
});

app.patch("/api/lands", async (req, res) => {
    await client.connect();
    try {
        // console.log(req);
        await client
            .db("land-records")
            .collection("lands")
            .updateOne(
                { id: req.body.land.id },
                { $set: { name: req.body.land.name } }
            );
        res.json({ status: "success", land: req.body.land });
    } catch (err) {
        console.log(err);
        res.sendStatus(422);
    } finally {
        client.close();
    }
});

app.delete("/api/lands", async (req, res) => {
    await client.connect();
    try {
        // console.log(req);
        await client
            .db("land-records")
            .collection("lands")
            .deleteOne({ id: req.body.land.id });
        res.json({ status: "success", land: req.body.land });
    } catch (err) {
        console.log(err);
        res.sendStatus(422);
    } finally {
        client.close();
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
