class Person { //pascal Naming Convention


    // Il est appellé automatiquement lors de l'instance d'une classe
    constructor(name, sexe, money) { // permet d'initialiser des valeurs pour nos champs (propriétés objet qu'on aura)
        this.name = name;
        this.sexe = sexe;
        this.money = money;
    }


}

const Vilitch = new Person("Vilitch", "Homme", 3000);
const Karl = new Person("Karl", "Homme", 15000);
const Balthasar = new Person("Balthasar", "Homme", 20000);
const Vlad = new Person("Vlad", "Homme", 6000);
const Archaon = new Person("Archaon", "Homme", 13000);
const Morathi = new Person("Morathi", "Femme", 4000);
const Katarina = new Person("Katarina", "Femme", 7500);
const Isabella = new Person("Isabella", "Femme", 2300);
const Allarielle = new Person("Allarielle", "Femme", 18000);
const Miao = new Person("Miao", "Femme", 13000);


let tombola = {
    Essaie: 0,
    choixparticipant: function() {
        const choix = Math.floor(Math.random() * 10 - 1);
        return choix
        
    }
    

}