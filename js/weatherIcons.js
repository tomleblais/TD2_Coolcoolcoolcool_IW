const iconsData = [
    { code: 0,   type: "sunny",  className: "wi-day-sunny",              description: "Soleil" },
    { code: 1,   type: "sunny",  className: "wi-day-sunny",              description: "Peu nuageux" },
    { code: 2,   type: "sunny",  className: "wi-cloud",                  description: "Ciel voilé" },
    { code: 3,   type: "cloudy", className: "wi-cloud",                  description: "Nuageux" },
    { code: 4,   type: "cloudy", className: "wi-cloudy",                 description: "Très nuageux" },
    { code: 5,   type: "cloudy", className: "wi-cloud",                  description: "Couvert" },
    { code: 6,   type: "foggy",  className: "wi-fog",                    description: "Brouillard" },
    { code: 7,   type: "foggy",  className: "wi-fog",                    description: "Brouillard givrant" },
    { code: 10,  type: "rainy",  className: "wi-rain",                   description: "Pluie faible" },
    { code: 11,  type: "rainy",  className: "wi-rain",                   description: "Pluie modérée" },
    { code: 12,  type: "rainy",  className: "wi-showers",                description: "Pluie forte" },
    { code: 13,  type: "rainy",  className: "wi-rain",                   description: "Pluie faible verglaçante" },
    { code: 14,  type: "rainy",  className: "wi-rain",                   description: "Pluie modérée verglaçante" },
    { code: 15,  type: "rainy",  className: "wi-showers",                description: "Pluie forte verglaçante" },
    { code: 16,  type: "foggy",  className: "wi-fog",                    description: "Bruine" },
    { code: 20,  type: "snowy",  className: "wi-snow",                   description: "Neige faible" },
    { code: 21,  type: "snowy",  className: "wi-snow",                   description: "Neige modérée" },
    { code: 22,  type: "snowy",  className: "wi-snowflake-cold",         description: "Neige forte" },
    { code: 30,  type: "snowy",  className: "wi-rain-mix",               description: "Pluie et neige mêlées faibles" },
    { code: 31,  type: "snowy",  className: "wi-rain-mix",               description: "Pluie et neige mêlées modérées" },
    { code: 32,  type: "snowy",  className: "wi-rain-mix",               description: "Pluie et neige mêlées fortes" },
    { code: 40,  type: "rainy",  className: "wi-day-rain",               description: "Averses de pluie locales et faibles" },
    { code: 41,  type: "rainy",  className: "wi-day-rain",               description: "Averses de pluie locales" },
    { code: 42,  type: "rainy",  className: "wi-day-showers",            description: "Averses locales et fortes" },
    { code: 43,  type: "rainy",  className: "wi-day-rain",               description: "Averses de pluie faibles" },
    { code: 44,  type: "rainy",  className: "wi-day-rain",               description: "Averses de pluie" },
    { code: 45,  type: "rainy",  className: "wi-day-showers",            description: "Averses de pluie fortes" },
    { code: 46,  type: "rainy",  className: "wi-day-rain",               description: "Averses de pluie faibles et fréquentes" },
    { code: 47,  type: "rainy",  className: "wi-day-rain",               description: "Averses de pluie fréquentes" },
    { code: 48,  type: "rainy",  className: "wi-day-showers",            description: "Averses de pluie fortes et fréquentes" },
    { code: 60,  type: "snowy",  className: "wi-day-snow",               description: "Averses de neige localisées et faibles" },
    { code: 61,  type: "snowy",  className: "wi-day-snow",               description: "Averses de neige localisées" },
    { code: 62,  type: "snowy",  className: "wi-day-snow",               description: "Averses de neige localisées et fortes" },
    { code: 63,  type: "snowy",  className: "wi-day-snow",               description: "Averses de neige faibles" },
    { code: 64,  type: "snowy",  className: "wi-day-snow",               description: "Averses de neige" },
    { code: 65,  type: "snowy",  className: "wi-day-snow-wind",          description: "Averses de neige fortes" },
    { code: 66,  type: "snowy",  className: "wi-day-snow",               description: "Averses de neige faibles et fréquentes" },
    { code: 67,  type: "snowy",  className: "wi-day-snow",               description: "Averses de neige fréquentes" },
    { code: 68,  type: "snowy",  className: "wi-day-snow-wind",          description: "Averses de neige fortes et fréquentes" },
    { code: 70,  type: "snowy",  className: "wi-day-sleet",              description: "Averses de pluie et neige mêlées localisées et faibles" },
    { code: 71,  type: "snowy",  className: "wi-day-rain-mix",           description: "Averses de pluie et neige mêlées localisées" },
    { code: 72,  type: "snowy",  className: "wi-day-rain-mix",           description: "Averses de pluie et neige mêlées localisées et fortes" },
    { code: 73,  type: "snowy",  className: "wi-day-rain-mix",           description: "Averses de pluie et neige mêlées faibles" },
    { code: 74,  type: "snowy",  className: "wi-day-rain-mix",           description: "Averses de pluie et neige mêlées" },
    { code: 75,  type: "snowy",  className: "wi-day-rain-mix",           description: "Averses de pluie et neige mêlées fortes" },
    { code: 76,  type: "snowy",  className: "wi-day-rain-mix",           description: "Averses de pluie et neige mêlées faibles et nombreuses" },
    { code: 77,  type: "snowy",  className: "wi-day-rain-mix",           description: "Averses de pluie et neige mêlées fréquentes" },
    { code: 78,  type: "snowy",  className: "wi-day-rain-mix",           description: "Averses de pluie et neige mêlées fortes et fréquentes" },
    { code: 100, type: "stormy", className: "wi-day-thunderstorm",       description: "Orages faibles et locaux" },
    { code: 101, type: "stormy", className: "wi-day-thunderstorm",       description: "Orages locaux" },
    { code: 102, type: "stormy", className: "wi-day-storm-showers",      description: "Orages fort et locaux" },
    { code: 103, type: "stormy", className: "wi-day-thunderstorm",       description: "Orages faibles" },
    { code: 104, type: "stormy", className: "wi-day-thunderstorm",       description: "Orages" },
    { code: 105, type: "stormy", className: "wi-storm-showers",          description: "Orages forts" },
    { code: 106, type: "stormy", className: "wi-thunderstorm",           description: "Orages faibles et fréquents" },
    { code: 107, type: "stormy", className: "wi-thunderstorm",           description: "Orages fréquents" },
    { code: 108, type: "stormy", className: "wi-storm-showers",          description: "Orages forts et fréquents" },
    { code: 120, type: "stormy", className: "wi-day-snow-thunderstorm",  description: "Orages faibles et locaux de neige ou grésil" },
    { code: 121, type: "stormy", className: "wi-day-snow-thunderstorm",  description: "Orages locaux de neige ou grésil" },
    { code: 122, type: "stormy", className: "wi-day-snow-thunderstorm",  description: "Orages locaux de neige ou grésil" },
    { code: 123, type: "stormy", className: "wi-day-snow-thunderstorm",  description: "Orages faibles de neige ou grésil" },
    { code: 124, type: "stormy", className: "wi-day-snow-thunderstorm",  description: "Orages de neige ou grésil" },
    { code: 125, type: "stormy", className: "wi-day-snow-thunderstorm",  description: "Orages de neige ou grésil" },
    { code: 126, type: "stormy", className: "wi-storm-showers",          description: "Orages faibles et fréquents de neige ou grésil" },
    { code: 127, type: "stormy", className: "wi-storm-showers",          description: "Orages fréquents de neige ou grésil" },
    { code: 128, type: "stormy", className: "wi-storm-showers",          description: "Orages fréquents de neige ou grésil" },
    { code: 130, type: "stormy", className: "wi-day-sleet-storm",        description: "Orages faibles et locaux de pluie et neige mêlées ou grésil" },
    { code: 131, type: "stormy", className: "wi-day-sleet-storm",        description: "Orages locaux de pluie et neige mêlées ou grésil" },
    { code: 132, type: "stormy", className: "wi-day-sleet-storm",        description: "Orages fort et locaux de pluie et neige mêlées ou grésil" },
    { code: 133, type: "stormy", className: "wi-day-sleet-storm",        description: "Orages faibles de pluie et neige mêlées ou grésil" },
    { code: 134, type: "stormy", className: "wi-day-sleet-storm",        description: "Orages de pluie et neige mêlées ou grésil" },
    { code: 135, type: "stormy", className: "wi-day-sleet-storm",        description: "Orages forts de pluie et neige mêlées ou grésil" },
    { code: 136, type: "stormy", className: "wi-day-sleet-storm",        description: "Orages faibles et fréquents de pluie et neige mêlées ou grésil" },
    { code: 137, type: "stormy", className: "wi-day-sleet-storm",        description: "Orages fréquents de pluie et neige mêlées ou grésil" },
    { code: 138, type: "stormy", className: "wi-day-sleet-storm",        description: "Orages forts et fréquents de pluie et neige mêlées ou grésil" },
    { code: 140, type: "stormy", className: "wi-day-thunderstorm",       description: "Pluies orageuses" },
    { code: 141, type: "stormy", className: "wi-day-sleet-storm",        description: "Pluie et neige mêlées à caractère orageux" },
    { code: 142, type: "stormy", className: "wi-day-snow-thunderstorm",  description: "Neige à caractère orageux" },
    { code: 210, type: "rainy",  className: "wi-day-rain",               description: "Pluie faible intermittente" },
    { code: 211, type: "rainy",  className: "wi-day-rain",               description: "Pluie modérée intermittente" },
    { code: 212, type: "rainy",  className: "wi-day-showers",            description: "Pluie forte intermittente" },
    { code: 220, type: "snowy",  className: "wi-day-snow",               description: "Neige faible intermittente" },
    { code: 221, type: "snowy",  className: "wi-day-snow",               description: "Neige modérée intermittente" },
    { code: 222, type: "snowy",  className: "wi-day-snow-wind",          description: "Neige forte intermittente" },
    { code: 230, type: "snowy",  className: "wi-rain-mix",               description: "Pluie et neige mêlées" },
    { code: 231, type: "snowy",  className: "wi-rain-mix",               description: "Pluie et neige mêlées" },
    { code: 232, type: "snowy",  className: "wi-rain-mix",               description: "Pluie et neige mêlées" },
    { code: 235, type: "rainy",  className: "wi-day-hail",               description: "Averses de grêle" }
]

/**
 * Build and return an element representing an icon corresponding to the specified weather code
 * @param {number} code Weather code
 * @returns {HTMLElement} Icon corresponding to the specified code
 */
function createIcon(code) {
    const weatherCode = parseInt(code)

    // Check if the code is valid
    if (isNaN(weatherCode)) 
        throw new InvalidCodeError(`${code} is not a number`)

    const iconData = getIconData(weatherCode);

    // Check if the code exists
    if (!iconData)
        throw new NoMatchingIconError(`None of the icons have ${code} as a code`)

    const iconElement = document.createElement("i")
    iconElement.classList.add("wi")
    iconElement.classList.add(iconData.className)
    iconElement.title = iconData.description
    // iconElement.classList.add(iconData.type)
    return iconElement
}

/**
 * Return the icon data from the specified weather code
 * @param {number} weatherCode Weather code
 * @returns {object} Icon data
 */
function getIconData(weatherCode) {
    return iconsData.find((value, index, obj) => value.code == weatherCode)
}