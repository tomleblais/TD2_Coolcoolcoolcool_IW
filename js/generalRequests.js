/**
 * Fetch raw text from the specified URL (wrapper function for fetch API)
 * @param {string} url - URL from which to retrieve data
 * @returns {Promise} Promise that resolves with raw text or rejects with an error
 */
function fetchJSON(url) {
    return new Promise((resolve, reject) => {
        if (fetch) {
            try {
                fetch(url)
                    .then(response => {
                        if (response.ok) {
                            resolve(response.json())
                        } else {
                            reject(new Error(`HTTP error! Status: ${response.status}`))
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            } catch (error) {
                reject(error)
            }
        } else {
            reject(new Error("Your browser does not support the fetch API"))
        }
    })
}
