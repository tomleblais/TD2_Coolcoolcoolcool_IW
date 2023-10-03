/* Constantes --------------------------------------------------------------- */
const INPUT_NBJOUR = document.getElementById("inputNbJour");
const INPUT_LATITUDE = document.getElementById("checkLatitude");
const INPUT_LONGITUDE = document.getElementById("checkLongitude");
const INPUT_CUMUL_PLUIE = document.getElementById("checkCumulPluie");
const INPUT_VENT_MOYEN = document.getElementById("checkVentMoyen");
const INPUT_DIRECTION_VENT = document.getElementById("checkDirectionVent");
const INPUT_TOUT_SELECTIONNER = document.getElementById("checkToutSelectionner");

const OUTPUT_NBJOUR = document.getElementById("outputNbJour");

const ALL_OPTIONS = [
    INPUT_LATITUDE,
    INPUT_LONGITUDE,
    INPUT_CUMUL_PLUIE,
    INPUT_VENT_MOYEN,
    INPUT_DIRECTION_VENT
];

/* Varaiblse ---------------------------------------------------------------- */
let all_disabled = false;

/* Evenements --------------------------------------------------------------- */

/**
 * Protège l'intervale de la valeur entrée et l'affiche à l'écrant
 */
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

/**
 * Sélectionne où desélectionne tous les éléments
 */
INPUT_TOUT_SELECTIONNER.addEventListener("click", evt => {
    const check = (INPUT_TOUT_SELECTIONNER.checked);

    for (let i = 0; i < ALL_OPTIONS.length; i++) {
        ALL_OPTIONS[i].checked = check;
    }
});

/**
 * Désactive input_tout_selectionner si un est déselectionner
 * ou l'active si ils sont tous sélectionner
 */
for (let i = 0; i < ALL_OPTIONS.length; i++) {
    ALL_OPTIONS[i].addEventListener("click", evt => {
        let nbNonSelectionner = 0;

        for (let i = 0; i < ALL_OPTIONS.length; i++) {
            if (ALL_OPTIONS[i].checked == false) {
                nbNonSelectionner++;
            }
        }

        INPUT_TOUT_SELECTIONNER.checked = (nbNonSelectionner == 0);
    });
}

/* Fonctions ---------------------------------------------------------------- */

/**
 * Désactive ou réactive les inputs
 * @param {*} inactif true : désactive | false : active
 * @returns 
 */
function disabledInputs(inactif) {
    if (
        inactif != true
        && inactif != false
    ) {
        return;
    } else if (
        all_disabled == inactif
    ) {
        return;
    }
    
    INPUT_NBJOUR.disabled = inactif;

    for (let i = 0; i < ALL_OPTIONS.length; i++) {
        ALL_OPTIONS[i].disabled = inactif;
    }

    INPUT_TOUT_SELECTIONNER.disabled = inactif;

    all_disabled = inactif;
}
