
function playGame() {

let listSurvivors = ["nerd", "blonde", "sportif", "black", "hero"];
let deadPeople = []; // quand tu déclare une variable let en dehors de toute fonction ou block, elle est globale au script (accès partout)

let jason = {
    health: 100,
    encounterSurviror: function () {
        const indexMusic = Math.floor(Math.random() * (listSurvivors.length - 1));
        return listSurvivors[indexMusic];
    },
    probabilityForDamage : function(currentSurvivor) {
        let proba = Math.round(Math.random() * 100) / 100; // ici je suis dans une méthode (function) portée locale
        let indexSurvivor = listSurvivors.indexOf(currentSurvivor); // ça va vous renvoyer la position du survivant dans listSurvivors

        if(proba <= 0.2) {
            listSurvivors.splice(indexSurvivor, 1); // mon perso meurt
            deadPeople.push(currentSurvivor); // j'ajoute à ma liste de mort mon perso
            console.log(`Le ${currentSurvivor} se fait attrapé et se fait massacrer`)
        } else if(proba <= 0.5) {
            this.health -= 10; // j'inflige 10 points de dégats à jason
            console.log(`Le ${currentSurvivor} s'échappe après une débacle`)
        } else {
            this.health -= 15;
            listSurvivors.splice(indexSurvivor, 1); // mon perso meurt
            deadPeople.push(currentSurvivor); // j'ajoute à ma liste de mort mon perso
            console.log(`Le ${currentSurvivor} se débat avant de se faire tuer`)
        }
    }
};

while(jason.health > 0  && listSurvivors.length > 0 ) {

    let survivor = jason.encounterSurviror(); // survivor a une portée local car je suis dans un block (while) elle n'existe que dans le while
    console.log("Le tueur rencontre : " + survivor);

    jason.probabilityForDamage(survivor);

    
}

if(listSurvivors.length == 0) {
   
    console.log("Ils sont tous mort")
}

if(jason.health <= 0 ) {
    console.log("Le Tueur est mort hourra!")
}

let playAgain = confirm("Do you wanna play again man?");

if(playAgain) {
    playGame();
} else {
    alert("merci d'avoir joeur gros bg");
}

}
playGame();