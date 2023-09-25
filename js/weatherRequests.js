const TOKEN = "626b55c5c509066c2d6e54a48c551379036dcf6f43cd6c06435bc586ded837cc";

/**
 * Fetch weather info from the specified INSEE code
 * @param {number} inseeCode INSEE code
 * @returns {Promise} Promise that resolves with weather info or rejects with an error
 */
function fetchWeather(inseeCode){
    return new Promise((resolve, reject) => {
        const regex = /^[a-zA-Z0-9]{5}$/;

        if (!regex.test(inseeCode)) {
            reject(new InvalidCodeError("Invalid insee code"));
        } else {
            fetchJSON(`https://api.meteo-concept.com/api/forecast/daily?token=${TOKEN}&insee=${inseeCode}`)
            .then(data => {
                resolve(data.forecast[0]);
            })
            .catch(reject);
        }
    });
}
