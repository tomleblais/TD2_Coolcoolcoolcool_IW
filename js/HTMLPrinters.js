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
    const weatherInfo = getIconData(data.weather);
    const minInfo = data.tmin;
    const maxInfo = data.tmax;
    const rainInfo = data.probarain;
    const sunInfo = data.sun_hours;

    //<div class="weatherCard">
    const weatherCardElement = document.createElement("div");
    weatherCardElement.classList.add("weatherCard");

    //<h3 class="weatherDescription">Soleil '</h3>' 
    const weatherDescriptionElement = document.createElement("h3");
    weatherDescriptionElement.classList.add("weatherDescription");
    weatherDescriptionElement.textContent = weatherInfo.description;

    //<i class="weatherIcon wi wi-day-sunny"> '</i>'
    const weatherIcon = document.createElement("i");
    weatherIcon.classList.add("weatherIcon");
    weatherIcon.classList.add("wi");
    weatherIcon.classList.add("weatherInfo.className");

    //<p class="temperature">
    const temperature = document.createElement("p");
    temperature.classList.add("temperature");

    //<span class="min">??</span>
    const min = document.createElement("span");
    min.classList.add("min");
    min.textContent = minInfo;

    //<span class="max">??</span>
    const max = document.createElement("span");
    max.classList.add("max");
    max.textContent = maxInfo;

    //<div class="statistics">
    const statistics = document.createElement("div");
    statistics.classList.add("statistics");


    const rainParagraph = document.createElement("p");

    //<span class="rain">??</span>
    const rain = document.createElement("span");
    rain.classList.add("rain");
    rain.textContent = rainInfo;

    //<br>
    const br = document.createElement("br");

    const sunParagraph = document.createElement("p");

    //<span class="sun">??</span>
    const sun = document.createElement("span");
    sun.classList.add("sun");
    sun.textContent = sunInfo;

    const textNodeDegrees = document.createTextNode("°C /");
    const textNodeDegree = document.createTextNode("°C");
    const textNodeRain = document.createTextNode("% de pluie");
    const textNodeSun = document.createTextNode("h de soleil");
    weatherCardElement.appendChild(weatherDescriptionElement);
    weatherCardElement.appendChild(weatherIcon);
    weatherCardElement.appendChild(temperature);
    weatherCardElement.appendChild(statistics);
    temperature.append(min);
    temperature.append(textNodeDegrees);
    temperature.append(max);
    temperature.append(textNodeDegree);
    sunParagraph.appendChild(sun);
    rainParagraph.appendChild(rain);
    rainParagraph.appendChild(textNodeSun);
    sunParagraph.appendChild(textNodeRain);
    statistics.appendChild(sunParagraph);
    statistics.appendChild(rainParagraph);

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
