window.onload = function() {
    cardFetch()
}

const cardFetch = async function() {
    let categories = ['Trending Now', 'Watch It Again', 'New Releases', 'Horror']
    for (let i = 0; i < categories.length; i++) {
        const url = `https://striveschool-api.herokuapp.com/api/movies/${categories[i]}`

        const respData = await fetch(url, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MjUwNTQ4NTAsImV4cCI6MTYyNjI2NDQ1MH0.F-daCuImBoFWGLa9pRwzdU4g9jlinUv9O4Kg6B_Lpr0"
            }
        })

        const resp = await respData.json()
        console.log(resp.length)
        let cardSection = document.getElementsByClassName('card-section')[0]

        cardSection.innerHTML += `<div class="section-title">
        <div class="text-ellipsis d-inline-block mt-4">
            <h4 class="text-white netflix-font first-h4">${categories[i]}</h4>
        </div>
        </div>`
        let div = document.createElement('div')
        div.classList.add('row', 'mx-n1', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3', 'row-cols-lg-4', 'row-cols-xl-5')
        cardSection.appendChild(div)
        for (let j = 0; j < resp.length; j++) {
            div.innerHTML += `<a href='edit_office.html?cat=${resp[j].category}&loop=${j}&id=${resp[j]._id}'><div class="mt-3 col px-1 zoom">
            <div class="position-relative ">
                <img src="${resp[j].imageUrl} " class="img-fluid rounded mb-2 mb-sm-0 w-100 " alt=" " />
            </div>
        </div></a>`
        }


    }
}