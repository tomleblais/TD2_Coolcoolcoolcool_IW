/**
 * Return an option element from the specified JSON data
 * @param {object} data JSON data
 * @returns {HTMLOptionElement} Option element
 */
function printCommuneOption(data){
    const option = document.createElement("option");
    option.textContent = data.nom;
    option.value = data.code;
    return option;
}
