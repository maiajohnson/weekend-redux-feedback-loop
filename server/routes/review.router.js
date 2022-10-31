const express = require("express");
const router = express.Router();
const pool = require('../modules/pool');

//POST
router.post("/", (req, res) => {

    const item = req.body;

    const sqlText = `INSERT INTO "feedback"
                    ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    
    pool.query(sqlText, [item.feeling, item.understanding, item.support, item.comments])
        .then((dbRes) => {
            console.log('POST to DB success', item);
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('POST to DB error', err);
            res.sendStatus(500);
        })
});


//GET
router.get("/", (req, res) => {
    pool.query(`SELECT * FROM "feedback" ORDER BY "id" DESC;`)
        .then((dbRes) => {
            res.send(result.rows);
        }).catch((err) => {
            console.log('GET error', err);
            res.sendStatus(500);
        });
});


module.exports = router;