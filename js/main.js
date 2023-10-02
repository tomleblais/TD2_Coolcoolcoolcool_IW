const communeNameElement = document.getElementsByClassName("communeName")[0];
window.addEventListener("load", event => {

    const communeSelect = document.getElementById("communeSelect");
    const postalCodeInput = document.getElementById("postalCodeInput");
    const submitButton = document.getElementById("submitButton");
    const weatherCardContainer = document.getElementsByClassName("weatherCardContainer")[0];
    const nbDay = document.getElementById("inputNbJour").value;

    submitButton.addEventListener("click", event => {
        disabledInputs();

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
