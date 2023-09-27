/**
 * Return an option element from the specified JSON data
 * @param {object} data JSON data
 * @returns {HTMLOptionElement} Option element
 */
function printCommuneOption(data){
    const option = document.createElement("option");
    option.textContent = data.nom;
    option.value = data.code;
    return option;
}

let data = {
    insee: "50032",
    cp: 50810,
    latitude: 49.1063,
    longitude: -1.0182,
    day: 0,
    datetime: "2023-09-27T02:00:00+0200",
    wind10m: 15,
    gust10m: 50,
    dirwind10m: 205,
    rr10: 0,
    rr1: 0,
    probarain: 10,
    weather: 4,
    tmin: 13,
    tmax: 23,
    sun_hours: 2,
    etp: 2,
    probafrost: 0,
    probafog: 30,
    probawind70: 0,
    probawind100: 0,
    gustx: 50
};

function printWeatherCard(data){
    const weatherInfo = getIconData(data.weather)

    const weatherCardElement = document.createElement("div");
    weatherCardElement.classList.add("weatherCard");

    const weatherDescriptionElement = document.createElement("h3");
    weatherDescriptionElement.classList.add("weatherDescription");
    weatherDescriptionElement.textContent = weatherInfo.description;

    weatherCardElement.appendChild(weatherDescriptionElement)

    return weatherCardElement;
}

document.querySelector("div.weatherCardContainer").appendChild(printWeatherCard(data))

//<div class="weatherCard">
  //          <h3 class="weatherDescription">Soleil</h3>
    //        <i class="weatherIcon wi wi-day-sunny"></i>
      //      <p class="temperature">
        //        <span class="min">??</span>°C / <span class="max">??</span>°C
          //  </p>
            //<div class="statistics">
              //  <p><span class="rain">??</span>%<br>de pluie</p>
                //<p><span class="sun">??</span>h<br>de soleil</p>
            //</div>
        //</div>
