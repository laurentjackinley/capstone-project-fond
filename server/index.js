const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {getPlace, getParks, createPark,deletePark} = require('./controller')

app.get("/api/place/", getPlace)
app.get("/api/parks", getParks)
app.post('/api/parks',createPark)
app.delete("/api/parks/:id", deletePark)

app.listen(4000, () => console.log('server running on port 4000'))