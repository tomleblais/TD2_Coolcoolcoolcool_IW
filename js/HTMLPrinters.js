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
 * Build and return an option element from the specified JSON data
 * @param {object} data JSON data
 * @returns {HTMLOptionElement} Option element
 */
function printCommuneOption(data){
    // <option value="14341">Ifs</option>
    const option = document.createElement("option");
    option.textContent = data.nom;
    option.value = data.code;
    return option;
}

/**
 * Return a weather card header element from weather data
 * @param {object} data Weather data
 * @returns {HTMLDivElement} Weather card header
 */
function printWeatherCardHeader(data){
    const weatherInfo = getIconData(data.weather);
    const minInfo = parseInt(data.tmin);
    const maxInfo = parseInt(data.tmax);
    const rainInfo = parseInt(data.probarain);
    const sunInfo = parseInt(data.sun_hours);
    
    // <div class="weatherCardHeader">
    const weatherCardHeaderElement = document.createElement("div");
    weatherCardHeaderElement.classList.add("weatherCardHeader");
    weatherCardHeaderElement.classList.add(weatherInfo.type);

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

    weatherCardHeaderElement.appendChild(dayElement);
    weatherCardHeaderElement.appendChild(weatherDescriptionElement);
    weatherCardHeaderElement.appendChild(weatherIcon);
    weatherCardHeaderElement.appendChild(temperature);
    weatherCardHeaderElement.appendChild(statistics);

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

    return weatherCardHeaderElement;
}

/**
 * Build and return a weather card footer element from weather data
 * @param {object} data Weather data
 * @returns {HTMLDivElement | null} Weather card footer or null
 */
function printWeatherCardFooter(data) {
    // <div class="weatherCardFooter"></div>
    const footer = document.createElement("div");
    footer.classList.add("weatherCardFooter");
    let p = null;

    if (INPUT_LATITUDE.checked) {
        p = document.createElement("p");
        p.textContent = `Latitude : ${data.latitude}`;
        footer.appendChild(p);
    }

    if (INPUT_LONGITUDE.checked) {
        p = document.createElement("p");
        p.textContent = `Longitude : ${data.longitude}`;
        footer.appendChild(p);
    }

    if (INPUT_CUMUL_PLUIE.checked) {
        p = document.createElement("p");
        p.textContent = `Cumul de pluie : ${data.probarain} mm`;
        footer.appendChild(p);
    }

    if (INPUT_VENT_MOYEN.checked) {
        p = document.createElement("p");
        p.textContent = `Vent moyen : ${data.wind10m} km/h`;
        footer.appendChild(p);
    }

    if (INPUT_DIRECTION_VENT.checked) {
        p = document.createElement("p");
        p.textContent = `Direction du vent : ${directionVent(data.dirwind10m)}`;
        footer.appendChild(p);
    }

    return (p == null)? null: footer;
}

/**
 * Build and return a weather card element from weather data
 * @param {object} data Weather data
 * @returns {HTMLDivElement} Weather card
 */
function printWeatherCard(data) {
    // <div class="weatherCard">
    const weatherCardElement = document.createElement("div");
    weatherCardElement.classList.add("weatherCard");

    const header = printWeatherCardHeader(data);
    const footer = printWeatherCardFooter(data);

    weatherCardElement.appendChild(header);
    // add footer
    if (footer != null) {
        weatherCardElement.appendChild(footer);
    }

    return weatherCardElement;
}

/**
 * Return the direction (N-S-O-E) from a degree number 
 * @param {number} direction Wind direction (in degrees)
 * @returns {string} N-S-O-E
 */
function directionVent(direction) {
    const error = "Non défini";

    // check direction
    if (
        isNaN(direction)
        || direction < 0
        || direction > 360
    ) {
        return error;
    }

    // read direction
    if (direction >= 337.5 || direction < 22.5) {
        return "Nord";
    } else if (direction < 67.5) {
        return "Nord-Est";
    } else if (direction < 112.5) {
        return "Est";
    } else if (direction < 157.5) {
        return "Sud-Est";
    } else if (direction < 202.5) {
        return "Sud";
    } else if (direction < 247.5) {
        return "Sud-Ouest";
    } else if (direction < 292.5) {
        return "Ouest";
    } else if (direction < 337.5) {
        return "Nord-Ouest";
    } else {
        return error;
    }
}
