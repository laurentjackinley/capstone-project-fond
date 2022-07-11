const express = require('express');
const cors = require('cors');

const path = require('path')

const app = express();

app.use(express.json());
app.use(cors());

const { getParks, createPark,deletePark} = require('./controller')
const {getPlace} = require('./controllerh')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.js'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/MyList.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/list.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/list.js'))
})

app.get("/api/place", getPlace)
app.get("/api/parks", getParks)
app.post('/api/parks',createPark)
app.delete("/api/parks/:id", deletePark)

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})