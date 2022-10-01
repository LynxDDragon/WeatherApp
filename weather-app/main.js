function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2a4126bfb907a9352315786baed7df57`)
    .then((res) => res.json())
    .then((data) => weatherParse(data, city))
}

getWeather('Boston')

function weatherParse(data){
    console.log(data)
    for (i of data.weather) {

        //Weather

        let main = i.main
        let description = i.description
        let temp = data.main.temp

        let clone = myTemplate.content.cloneNode(true);
        let td = clone.querySelectorAll('td')

        td[0].textContent = main
        td[1].textContent = description
        td[2].textContent = parseInt((temp - 273.15) * (9/5) +32) + ('\u00B0 F')

        tableBody.appendChild(clone)

        //Location

        let country = data.sys.country
        let city = data.name

        clone = myLocation.content.cloneNode(true);
        let h3 = clone.querySelectorAll('h3')

        h3[0].textContent = country
        h3[1].textContent = city

        area.appendChild(clone)

        // NOT READY YET 



    }

}

const myForm = document.getElementById('form')

myForm.addEventListener('submit', (weatherstuff) => {
    weatherstuff.preventDefault()
    const myForm = document.getElementById('form')
    formData = new FormData (myForm)
    let myList = []
    for (const [key, value] of formData) {
        myList.push(value)
    }
        getWeather(myList[0])
})