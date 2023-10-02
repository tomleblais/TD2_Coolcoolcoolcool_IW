/* Constantes ---------------------------------- */
const INPUT_NBJOUR = document.getElementById("inputNbJour");
const OUTPUT_NBJOUR = document.getElementById("outputNbJour");

/* Evenements ---------------------------------- */
INPUT_NBJOUR.addEventListener("input", evt => {
    if (
        isNaN(INPUT_NBJOUR.value)
        || INPUT_NBJOUR.value < 1
        || INPUT_NBJOUR.value > 7
    ) {
        INPUT_NBJOUR.value = parseInt(OUTPUT_NBJOUR.textContent);
    }

    OUTPUT_NBJOUR.textContent = INPUT_NBJOUR.value;
});