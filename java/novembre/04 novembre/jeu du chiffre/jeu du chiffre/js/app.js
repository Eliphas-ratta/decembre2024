
const nombreMystere = Math.floor(Math.random() * 100) + 1;
let tentative = 0; 

function devinerNombre() {
   
    const saisie = prompt("Devinez le chiffre entre 1 et 100 :");
    const nombreSaisi = parseInt(saisie, 10);
    tentative++;

    
    if (isNaN(nombreSaisi) || nombreSaisi < 1 || nombreSaisi > 100) {
        alert("Veuillez entrer un nombre valide entre 1 et 100.");
        devinerNombre();
    } else if (nombreSaisi < nombreMystere) {
        alert("C'est plus grand !");
        devinerNombre();
    } else if (nombreSaisi > nombreMystere) {
        alert("C'est plus petit !");
        devinerNombre();
    } else {
        alert(`Bravo ! Vous avez trouvé le nombre ${nombreMystere} en ${tentative} tentatives.`);
    }
}


devinerNombre();
