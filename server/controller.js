const parks = require('./db.json')
// const visitedParks = require('./newdb.json')

let globalId = 7
module.exports = {
    // getPlace: (req, res) => {
    //     const places = ['Zion National Park, UT','Acrches National Park,UT','Death Valley National Park, NV','Sequoia National Park, CA','Yellowstone National Park, ID']
    //     let randomIndex = Math.floor(Math.random() * places.length);
    //     let randomPlace = places[randomIndex];

    //     res.status(200).send(randomPlace);
    // },
    
    getParks:  (req, res) => {
        res.status(200).send(parks)
        console.log(parks)
    },
    deletePark: (req, res) => {
        let index = parks.findIndex(elem => elem.id === +req.params.id)
        // let delOne = deletePark.push(visitedParks)
        parks.splice(index, 1)
        res.status(200).send(parks)
    },
    createPark: (req, res) => {
        let {name, imageURL, idea} = req.body;
        let newPark = {
            name,
            imageURL,
            idea,
            id: globalId
        }
        parks.push(newPark)
        globalId++
        res.status(200).send(parks)
    }
}