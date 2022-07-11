
module.exports = {
getPlace: (req, res) => {
    const places = ['Zion National Park, UT','Acrches National Park,UT','Death Valley National Park, NV','Sequoia National Park, CA','Yellowstone National Park, ID']
    let randomIndex = Math.floor(Math.random() * places.length);
    let randomPlace = places[randomIndex];

    res.status(200).send(randomPlace);
    }
}