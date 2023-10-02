const communeNameElement = document.getElementsByClassName("communeName")[0];
window.addEventListener("load", event => {

    const communeSelect = document.getElementById("communeSelect");
    const postalCodeInput = document.getElementById("postalCodeInput");
    const submitButton = document.getElementById("submitButton");
    const weatherCardContainer = document.getElementsByClassName("weatherCardContainer")[0];
    const nbDay = document.getElementById("inputNbJour").value;

    submitButton.addEventListener("click", event => {
        const inseeCode = parseInt(communeSelect.value);
        fetchWeather(inseeCode)
            .then(data => {
                if (
                    isNaN(nbDay)
                    || nbDay < 1
                    || nbDay > 7
                ) {
                    nbDay = 1;
                }

                weatherCardContainer.innerHTML = "";
                for (let i = 0; i < nbDay; i++) {
                    weatherCardContainer.appendChild(printWeatherCard(data.forecast[i]));
                }

                /*const card = printWeatherCard(data.forecast[0]);
                const cardDay2 = printWeatherCard(data.forecast[1]);
                const cardDay3 = printWeatherCard(data.forecast[2]);
                const cardDay4 = printWeatherCard(data.forecast[3]);
                const cardDay5 = printWeatherCard(data.forecast[4]);
                const cardDay6 = printWeatherCard(data.forecast[5]);
                const cardDay7 = printWeatherCard(data.forecast[6]);
                weatherCardContainer.appendChild(card);
                weatherCardContainer.appendChild(cardDay2);
                weatherCardContainer.appendChild(cardDay3);
                weatherCardContainer.appendChild(cardDay4);
                weatherCardContainer.appendChild(cardDay5);
                weatherCardContainer.appendChild(cardDay6);
                weatherCardContainer.appendChild(cardDay7);*/

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
                if (error instanceof CommuneNotFoundError) {
                    communeSelect.innerHTML = "";
                    communeSelect.disabled = true;

                    const option = document.createElement("option");
                    option.textContent = "Selectionner"
                    communeSelect.appendChild(option)

                    submitButton.disabled = true;
                }
            })
    })
})
