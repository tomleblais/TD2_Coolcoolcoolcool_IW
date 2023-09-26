window.addEventListener("load", event => {

    const postalCodeInput = document.getElementById("postalCodeInput");
    const communeSelect = document.getElementById("communeSelect");
    
    postalCodeInput.addEventListener("change", event => {
        fetchCommune(postalCodeInput.value)
            .then(communes => {

                communeSelect.innerHTML = ""; // Remove all children
                communeSelect.disabled = false;

                communes.forEach(commune => {
                    const option = printCommuneOption(commune);
                    communeSelect.appendChild(option);
                });
            })
            .catch(error => {
                if (error instanceof CommuneNotFoundError) {
                    communeSelect.innerHTML = "";
                    communeSelect.disabled = true;
                }
            })
    })
})