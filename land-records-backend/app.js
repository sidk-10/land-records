const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
const port = 3000;
app.use(cors());

const uri = "mongodb://localhost:27017/land-records";
let client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect();
let collection = client.db("land-records").collection("lands");

app.get("/", (req, res) => {
    res.send("API is Live!");
});

app.post("/api/login", async (req, res) => {
    if (req.body.username == "admin" && req.body.password == "admin@123") {
        const token = generateAccessToken({
            user: { username: req.body.username },
        });
        res.json({ token: token });
    } else {
        res.sendStatus(403);
    }
});

app.get("/api/lands", authenticateToken, async (req, res) => {
    // console.log("reached here");
    try {
        await collection.find({}).toArray((err, results) => {
            if (err) throw err;
            res.json({ data: results });
        });
    } catch (err) {
        // console.log(err);
    }
});

app.post("/api/lands", authenticateToken, async (req, res) => {
    try {
        console.log(req);
        await collection.insertOne(req.body.land);
        res.json({ status: "success", land: req.body.land });
    } catch (err) {
        // console.log(err);
    }
});

app.patch("/api/lands", authenticateToken, async (req, res) => {
    try {
        console.log(req.body.land);
        await collection.updateOne(
            { id: req.body.land.id },
            { $set: { name: req.body.land.name } }
        );
        res.json({ status: "success", land: req.body.land });
    } catch (err) {
        // console.log(err);
        res.sendStatus(422);
    }
});

app.delete("/api/lands", authenticateToken, async (req, res) => {
    try {
        console.log(req);
        await collection.deleteOne({ id: req.body.land.id });
        res.json({ status: "success", land: req.body.land });
    } catch (err) {
        // console.log(err);
        res.sendStatus(422);
    }
});

app.listen(process.env.PORT || port, async () => {
    console.log(
        `App listening at http://localhost:${process.env.PORT || port}`
    );
});

function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET);
}

async function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401);
    await jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err);
        if (err) {
            // console.log("error");
            return res.sendStatus(403);
        }
        // console.log("here");
        req.user = user;
        next();
    });
}
