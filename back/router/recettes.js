const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.setHeader("Content-Type", "text/plain")
    res.end("recettes '/' !!!!!!!")
})

router.get("/pain", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.end("recettes '/pain' !!!!!!!");
});

module.exports = router