const resultPlace = document.getElementById('resultPlace')
const form  = document.querySelector('form')

const baseURL = 'http://localhost:4000/api/parks'

const parksCallback = ({data: parks}) => displayParks(parks)
const errCallback = err => console.log(err.reponse.data)

const getAllParks = () => axios.get(baseURL).then(parksCallback).catch(errCallback)    

const createPark = body => axios.post(baseURL, body).then(parksCallback).catch(errCallback)

const deletePark = id => axios.delete(`${baseURL}/${id}`).then(parksCallback).catch(errCallback)

function mainCont(event) {
    event.preventDefault()
    
    let name = document.querySelector('#name')
    let imageURL = document.querySelector('#img')
    
    let bodyObj = {
        name: name.value,
        imageURL: imageURL.value
    }
    
    createPark(bodyObj)
    
    name.value = ''
    imageURL.value = ''
}

function createParkCard(park) {
    const parkCard = document.createElement('div')
    parkCard.classList.add('park-card')
    
    parkCard.innerHTML = `<img alt='a park image' src= ${park.imageURL} class = "park-image"/>
    <p class="name">${park.name}</p>
    <button onclick="deletePark(${park.id})">delete</button>`
    
    resultPlace.appendChild(parkCard)
}

// function createParksCallback(datares) {
//     const arr = datares.data
//     console.log(arr)
//     resultPlace.innerHTML= ``
//     for (let i = 0; i < arr.length; i++){
//         createParkCard(arr[i]) 
//     }
// }

// function deleteParksCallback(deldata){
//     const arr = deldata.data
//     console.log(arr)
//     resultPlace.innerHTML= ``
//     for (let i = 0; i < arr.length; i++){
//         createParkCard(arr[i]) 
//     }
//  }

// function parksCallback(result) {
//     const arr = result.data
//     console.log(arr)
//     resultPlace.innerHTML = ``
//     for (let i = 0; i < arr.length; i++) {
//         createParkCard(arr[i])
//     }
// }

function displayParks(arr){
    resultPlace.innerHTML =``
    for (let i = 0; i < arr.length; i++) {
      createParkCard(arr[i])
  }
}

form.addEventListener('submit',mainCont)

getAllParks()