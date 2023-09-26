window.addEventListener("load", event => {
    const postalCodeInput = document.getElementById("postalCodeInput");
    postalCodeInput.addEventListener("change", event => {
        fetchCommune(postalCodeInput.value)
        .then(data =>{
            console.log(data);
        })
        .catch(console.error)
    })
})