const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Backend is running!</h1>");
});

app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express!</h1>");
});

app.get("/goodbye", (req, res) => {
    res.send("<h1>Goodbye, Express!</h1>");
});

app.get("/api/songs", (req, res) => {
    res.json([
        { title: "Uptown Funk", artist: "Bruno Mars" },
        { title: "Hello", artist: "Adele" }
    ]);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});