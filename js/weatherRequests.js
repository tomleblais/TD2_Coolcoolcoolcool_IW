const TOKEN = "626b55c5c509066c2d6e54a48c551379036dcf6f43cd6c06435bc586ded837cc";

function fetchWeather(inseeCode){
    return new Promise((resolve, reject) => {
        const regex = /^[a-zA-Z0-9]{5}$/;

        if (!regex.test(inseeCode)) {
            reject(new Error("Invalid code"));
        } else {
            fetchJSON(`https://api.meteo-concept.com/api/forecast/daily?token=${TOKEN}&insee=${inseeCode}`)
            .then(data => {
                resolve(data.forecast[0]);
            })
            .catch(error => {
                if (error instanceof Error) {
                    reject(new Error("This commune does not exist"));
                } else {
                    reject(error);
                }
            });
        }
    });
}

fetchWeather("14999")
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })