function getCalendar(day) {
    return {
        "Monday": "Lundi",
        "Tuesday": "Mardi",
        "Wednesday": "Mercredi",
        "Thursday": "Jeudi",
        "Friday": "Vendredi",
        "Saturday": "Samedi",
        "Sunday": "Dimanche",
    }[day];
}

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

/**
 * Return a weather card element from weather data
 * @param {object} data Weather data
 * @returns {HTMLDivElement} Weather card
 */
function printWeatherCard(data){
    const weatherInfo = getIconData(data.weather);
    const minInfo = parseInt(data.tmin);
    const maxInfo = parseInt(data.tmax);
    const rainInfo = parseInt(data.probarain);
    const sunInfo = parseInt(data.sun_hours);


    // <div class="weatherCard">
    const weatherCardElement = document.createElement("div");
    weatherCardElement.classList.add("weatherCard");
    weatherCardElement.classList.add(weatherInfo.type);

    // <h3 class="day">Lundi</h3>
    const dayElement = document.createElement("h3");
    dayElement.classList.add("day");
    dayElement.textContent = getCalendar(moment(data.datetime).format("dddd"));

    // <h4 class="weatherDescription">Soleil</h4>
    const weatherDescriptionElement = document.createElement("h4");
    weatherDescriptionElement.classList.add("weatherDescription");
    weatherDescriptionElement.textContent = weatherInfo.description;

    // <i class="weatherIcon wi wi-day-sunny"></i>
    const weatherIcon = document.createElement("i");
    weatherIcon.classList.add("weatherIcon");
    weatherIcon.classList.add("wi");
    weatherIcon.classList.add(weatherInfo.className);

    // <p class="temperature">
    const temperature = document.createElement("p");
    temperature.classList.add("temperature");

    // <span class="min"></span>
    const min = document.createElement("span");
    min.classList.add("min");
    min.textContent = minInfo;

    // <span class="max"></span>
    const max = document.createElement("span");
    max.classList.add("max");
    max.textContent = maxInfo;

    // <div class="statistics">
    const statistics = document.createElement("div");
    statistics.classList.add("statistics");

    const rainParagraph = document.createElement("p");

    // <span class="rain"></span>
    const rain = document.createElement("span");
    rain.classList.add("rain");
    rain.textContent = rainInfo;

    // <br>
    const br = document.createElement("br");
    const sunParagraph = document.createElement("p");

    // <span class="sun"></span>
    const sun = document.createElement("span");
    sun.classList.add("sun");
    sun.textContent = sunInfo;

    const textNodeDegrees = document.createTextNode("°C / ");
    const textNodeDegree = document.createTextNode("°C");
    const textNodePercent = document.createTextNode(" %")
    const textNodeHour = document.createTextNode(" h")
    const textNodeRain = document.createTextNode("de pluie");
    const textNodeSun = document.createTextNode("de soleil");

    weatherCardElement.appendChild(dayElement);
    weatherCardElement.appendChild(weatherDescriptionElement);
    weatherCardElement.appendChild(weatherIcon);
    weatherCardElement.appendChild(temperature);
    weatherCardElement.appendChild(statistics);

    temperature.appendChild(min);
    temperature.appendChild(textNodeDegrees);
    temperature.appendChild(max);
    temperature.appendChild(textNodeDegree);

    rainParagraph.appendChild(rain);
    rainParagraph.appendChild(textNodePercent);
    rainParagraph.appendChild(br);
    rainParagraph.appendChild(textNodeRain);

    sunParagraph.appendChild(sun);
    sunParagraph.appendChild(textNodeHour);
    sunParagraph.appendChild(br.cloneNode());
    sunParagraph.appendChild(textNodeSun);

    statistics.appendChild(sunParagraph);
    statistics.appendChild(rainParagraph);

    return weatherCardElement;
}
