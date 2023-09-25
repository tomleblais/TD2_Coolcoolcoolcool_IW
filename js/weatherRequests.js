const TOKEN = "626b55c5c509066c2d6e54a48c551379036dcf6f43cd6c06435bc586ded837cc";

function fetchWeather(inseeCode){
    return new Promise((resolve, reject) => {
        const regex = new RegExp("[a-zA-Z0-9]");

        if (inseeCode.length != 5) {
            reject(new Error("Invalid insee code"));
        } else if (regex.test(inseeCode)) {
            reject(new Error("Invalid code"));
        } else {
            fetchJSON(`https://api.meteo-concept.com/api/forecast/daily?token=${TOKEN}&insee=${inseeCode}`)
            .then(data => {
                if (data.length > 0) {
                    resolve(data);
                } else {
                    reject(new Error("this INSEE code does not exist"));
                }
            })
            .catch(reject);
        }
    });
}