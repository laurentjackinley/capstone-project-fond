const placeBtn = document.getElementById("randomButton")
baseURL = 'http://localhost:4000'

const getPlace = () => {
    axios.get(baseURL + "/api/place/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

placeBtn.addEventListener('click', getPlace)