const netflixSubmit = async function(event) {

    event.preventDefault()

    const myForm = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        imageUrl: document.getElementById('imageurl').value,
        category: document.getElementById('category').value
    }
    console.log(JSON.stringify(myForm))
    const resp = await fetch('https://striveschool-api.herokuapp.com/api/movies/', {
        method: "POST",
        body: JSON.stringify(myForm),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MjUwNTQ4NTAsImV4cCI6MTYyNjI2NDQ1MH0.F-daCuImBoFWGLa9pRwzdU4g9jlinUv9O4Kg6B_Lpr0",
            "Content-Type": "application/json"
        }
    })
    let alert = document.getElementsByClassName('alert1')[0]
    alert.style.display = "block"
        //alert.classList.add('alert-success')
    alert.innerText = 'Successfully Created!'
}