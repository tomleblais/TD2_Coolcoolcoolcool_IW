window.addEventListener("load", event => {

    const postalCodeInput = document.getElementById("postalCodeInput");
    const communeSelect = document.getElementById("communeSelect");
    const submitButton = document.getElementById("submitButton");
    
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