window.onload = async function() {
    const url = 'https://striveschool-api.herokuapp.com/api/movies/'
    const eventId = new URLSearchParams(window.location.search).get("cat")
    const card_number = new URLSearchParams(window.location.search).get("loop")
    console.log(eventId)

    let respData = await fetch(url + eventId, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MjUwNTQ4NTAsImV4cCI6MTYyNjI2NDQ1MH0.F-daCuImBoFWGLa9pRwzdU4g9jlinUv9O4Kg6B_Lpr0"
        }
    })
    let resp = await respData.json()
    console.log(resp[card_number].name)

    if (eventId) {

        document.getElementById('name').value = resp[card_number].name
        document.getElementById('description').value = resp[card_number].description
        document.getElementById('imageurl').value = resp[card_number].imageUrl
        document.getElementById('category').value = resp[card_number].category
    }
}


const netflixEdit = async function(event) {
    event.preventDefault()

    //const url = 'https://striveschool-api.herokuapp.com/api/movies/'
    const eventId = new URLSearchParams(window.location.search).get("id")
        //console.log(eventId)

    const myForm = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        imageUrl: document.getElementById('imageurl').value,
        category: document.getElementById('category').value
    }
    console.log(JSON.stringify(myForm))
    const resp = await fetch('https://striveschool-api.herokuapp.com/api/movies/' + eventId, {
        method: "PUT",
        body: JSON.stringify(myForm),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MjUwNTQ4NTAsImV4cCI6MTYyNjI2NDQ1MH0.F-daCuImBoFWGLa9pRwzdU4g9jlinUv9O4Kg6B_Lpr0",
            "Content-Type": "application/json"
        }
    })
    let alert = document.getElementsByClassName('alert1')[0]
    alert.style.display = "block"
        //alert.classList.add('alert-success')
    alert.innerText = 'Successfully Updated!'
}

const deleteButton = async function(event) {
    event.preventDefault()
    const eventId = new URLSearchParams(window.location.search).get("id")

    const resp = await fetch('https://striveschool-api.herokuapp.com/api/movies/' + eventId, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MjUwNTQ4NTAsImV4cCI6MTYyNjI2NDQ1MH0.F-daCuImBoFWGLa9pRwzdU4g9jlinUv9O4Kg6B_Lpr0",
        }
    })
    let alert = document.getElementsByClassName('alert2')[0]
    alert.style.display = "block"
        //alert.classList.add('alert-danger')
    alert.innerText = 'Successfully Deleted!'
}