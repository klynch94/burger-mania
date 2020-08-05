const express = require("express");

const burger = require("../models/burger.js");

const router = express.Router();

// home route
router.get("/", function (req, res) {
    burger.all(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// create new burger route
router.post("/api/burgers", function (req, res) {
    burger.create([
        "name"
    ], [
        req.body.name
    ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});
