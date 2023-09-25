/**
 * Fetch commune info from a postal code
 * from the API https://geo.api.gouv.fr/
 * @param {number} code - postal code
 * @returns {Promise} Promise that resolves with commune info or rejects with an error
 */
function fetchCommune(code){
    return new Promise((resolve, reject) => {
        const postalCode = parseInt(code)
        if (isNaN(postalCode)) {
            reject(new InvalidCodeError("Invalid postal code (not a number)"))
        }
        else if(postalCode < 900 || postalCode > 100000) {
            reject(new InvalidCodeError("Invalid code (too large or too small)"))
        }
        else{
            fetchJSON("https://geo.api.gouv.fr/communes?codePostal=" + postalCode)
                .then(data => {
                    if(data.length > 0){
                        resolve(data)
                    }
                    else{
                        reject(new CommuneNotFoundError("this commune code does not exist"))
                    }
                })
                .catch(reject)
        }
    })
}
