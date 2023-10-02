const communeNameElement = document.getElementsByClassName("communeName")[0];
window.addEventListener("load", event => {

    const communeSelect = document.getElementById("communeSelect");
    const postalCodeInput = document.getElementById("postalCodeInput");
    const submitButton = document.getElementById("submitButton");
    const weatherCardContainer = document.getElementsByClassName("weatherCardContainer")[0];

    submitButton.addEventListener("click", event => {
        const inseeCode = communeSelect.value;
        fetchWeather(inseeCode)
            .then(data => {
                weatherCardContainer.innerHTML = "";
                
                for(let i = 0; i < 7; i++){
                    const card = printWeatherCard(data.forecast[i]);
                    weatherCardContainer.appendChild(card);

                }
                communeNameElement.textContent = data.city.name;
                communeNameElement.hidden = false;
            })
            .catch(error => {
                console.error(error)
                communeNameElement.hidden = true;
            })
    })

    postalCodeInput.addEventListener("input", event => {
        fetchCommune(postalCodeInput.value)
            .then(communes => {

                communeSelect.innerHTML = ""; // Remove all children
                communeSelect.disabled = false;

                communes.forEach(commune => {
                    const option = printCommuneOption(commune);
                    communeSelect.appendChild(option);
                });

                submitButton.disabled = false;
            })
            .catch(error => {
                communeSelect.innerHTML = "";
                communeSelect.disabled = true;

                const option = document.createElement("option");
                option.textContent = "Selectionner"
                communeSelect.appendChild(option)
            })
    })
})
