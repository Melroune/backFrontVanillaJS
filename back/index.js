const express = require('express')
const fs = require('fs')
const util = require('util')
const path = require('path')

const app = express()
const recettes = require('./router/recettes.js')
const readFile = util.promisify(fs.readFile)

// const tabrecette = require("./mocks/recettes/recettes.json")

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Acces-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})
app.use('/recettes', recettes)

app.get('/', (req, res) => {
    
    const filePath = path.join(__dirname, './mocks/recettes/', 'recettes.json' )
    readFile(filePath, 'utf8')
    .then(data => {
        res.header("Content-Type", "application/json; charset=utf-8");
        res.end(data);
    })
    // res.json(tabrecette)
})


const server = app.listen(3030, () => { 
    console.log('http://localhost:3030')
})
// const http = require\('http')
// // console.log(http)

// const server = http.createServer((req, res) => {
//     res.writeHead(200)
//     res.end('hello Word poulet yolo')
// })

// server.listen(3030)
// console.log('http://localhost:3030')
