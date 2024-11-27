// CRÉER LES HEROS

class Hero { // POO (PROGRAMMATION ORIENTÉE OBJET)

    constructor(name, marbles, loss, gain) {
        this.name = name;
        this.marbles = marbles;
        this.loss = loss;
        this.gain = gain;
    }

}

let hero1 = new Hero("Seon Gi-hun", 10, 3, 1);
let hero2 = new Hero("Kang Sae-byeok", 10, 2, 2);
let hero3 = new Hero("Cho Sang-woo", 10, 1, 3);


// CRÉER LES ENNEMIES


class Enemy { // POO (PROGRAMMATION ORIENTÉE OBJET)

    constructor(name, marbles, age) {
        this.name = name;
        this.marbles = marbles;
        this.age = age;
    }

}

let listEnnemys = [];

let enemy1 = new Enemy("Enemy1", 12, 18);
let enemy2 = new Enemy("Enemy2", 8, 20);
let enemy3 = new Enemy("Enemy3", 16, 82);
let enemy4 = new Enemy("Enemy4", 17, 34);
let enemy5 = new Enemy("Enemy5", 20, 23);
let enemy6 = new Enemy("Enemy6", 7, 72);
let enemy7 = new Enemy("Enemy7", 14, 23);
let enemy8 = new Enemy("Enemy8", 19, 15);
let enemy9 = new Enemy("Enemy9", 12, 70);
let enemy10 = new Enemy("Enemy10", 7, 67);
let enemy11 = new Enemy("Enemy11", 13, 40);
let enemy12 = new Enemy("Enemy12", 20, 30);
let enemy13 = new Enemy("Enemy13", 18, 32);
let enemy14 = new Enemy("Enemy14", 11, 21);
let enemy15 = new Enemy("Enemy15", 10, 63);
let enemy16 = new Enemy("Enemy16", 12, 45);
let enemy17 = new Enemy("Enemy17", 13, 35);
let enemy18 = new Enemy("Enemy18", 22, 20);
listEnnemys.push(enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10, enemy11, enemy12, enemy13, enemy14, enemy15, enemy16, enemy17, enemy18);

if(confirm ("Do you want to start a game")) {
    game();
}
    else { alert("Pas sympa :( mais ok...")

    }


function game() {
// DEMANDER QUEL NIVEAU
let listLevels = [4, 12, 18];

let answerLevel = prompt("Quel niveau tu veux? press (0) pour Facile, (1) pour moyen, (2) pour difficile");
let nbrEncounters = listLevels[answerLevel];
console.log(nbrEncounters);


// QUEL PERSO IL VEUT CHOISIR
let listHeroes = [hero1, hero2, hero3];
let answerhero = prompt("Quel héro tu veux? press (0) Seon-Gi-Hun, (1) Sae-bok, (2) Sang-who");
let hero = listHeroes[answerhero];
console.log(hero.name);



while (nbrEncounters > 0 && hero.marbles > 0 ) {
    let random = Math.floor(Math.random() * listEnnemys.length);
    Opponent = listEnnemys[random]
    console.log(Opponent.name + " qui a " + Opponent.marbles + " billes et a " + Opponent.age + " ans");
    let Age = Opponent.age;

    if(Age < 70) {
    let guess = prompt("(0) pair, (1) impair");
    
    if (guess == 0 && Opponent.marbles % 2 == 0 || guess == 1 && Opponent.marbles % 2 != 0) {
        hero.marbles += hero.gain + Opponent.marbles;
        let herototalgain = hero.gain + Opponent.marbles;
        console.log("Vous avez gagné " + herototalgain + " billes, vous avez au total " + hero.marbles + " billes");

    } else if (guess == 0 && Opponent.marbles % 2 != 0 || guess == 1 && Opponent.marbles % 2 == 0) {
        hero.marbles -= hero.loss + -Opponent.marbles;
        let herototalloss = hero.loss + Opponent.marbles;
        console.log("Vous avez perdu " + herototalloss + " billes, vous avez au total " + hero.marbles + " billes");
    } else if (guess != 0 || guess !=1) {
        console.log("la valeur est rentré n'est pas 0 ou 1")
        nbrEncounters++;
    }

} else if(Age >= 70){
    
    let guess = prompt("(0) pair, (1) impair, (2) tricher");
    
    if (guess == 0 && Opponent.marbles % 2 == 0 || guess == 1 && Opponent.marbles % 2 != 0) {
        hero.marbles += hero.gain + Opponent.marbles;
        let herototalgain = hero.gain + Opponent.marbles;
        console.log("Vous avez gagné " + herototalgain + " billes, vous avez au total " + hero.marbles + " billes");

    } else if (guess == 0 && Opponent.marbles % 2 != 0 || guess == 1 && Opponent.marbles % 2 == 0) {
        hero.marbles -= hero.loss + -Opponent.marbles;
        let herototalloss = hero.loss + Opponent.marbles;
        console.log("Vous avez perdu " + herototalloss + " billes, vous avez au total " + hero.marbles + " billes");
    } 
    
    else if (guess == 2) {
        hero.marbles += Opponent.marbles;
        console.log("Vous avez gagné en trichant " + Opponent.marbles + " billes, vous avez au total " + hero.marbles + " billes");
    } else if (guess != 0 || guess !=1 || guess != 2) {
        console.log("la valeur est rentré n'est pas 0 ou 1 ou 2")
        nbrEncounters++;
    }

}
    nbrEncounters--;
    console.log("Il reste " + nbrEncounters + " opposant")
}


/* while (nbrEncounters > 0 && hero.marbles > 0 && Opponent.age > 70) {
    let random = Math.floor(Math.random() * listEnnemys.length);
    Opponent = listEnnemys[random]
    console.log(Opponent.name);
    let guess = prompt("(0) pair, (1) impair, (3) resterez vous loyal ?");
    if (guess == 0 && Opponent.marbles % 2 == 0 || guess == 1 && Opponent.marbles % 2 != 0) {
        hero.marbles += hero.gain + Opponent.marbles;
        let herototalgain = hero.gain + Opponent.marbles;
        console.log("Vous avez gagné " + herototalgain + " billes, vous avez au total " + hero.marbles + " billes");

    } else if (guess == 0 && Opponent.marbles % 2 != 0 || guess == 1 && Opponent.marbles % 2 == 0) {
        hero.marbles -= hero.loss + -Opponent.marbles;
        let herototalloss = hero.loss + Opponent.marbles;
        console.log("Vous avez perdu " + herototalloss + " billes, vous avez au total " + hero.marbles + " billes");
    }

    nbrEncounters--;
} */



if (nbrEncounters == 0 && hero.marbles > 0) {
    console.log("vous avez gagné");
}
else if (nbrEncounters != 0 && hero.marbles <= 0) {
    console.log("Vous avez perdu");
}


if(confirm ("Do you want to play again")) {
    game();
}
    else { ("bonne journée")

    }
}




// tant que nbrEncounters > 0 && hero.marbles > 0 le jeu continu

// rencontrer au hasard un enemie dans la liste d'ennemy (math.random())

// mon ennemi a -til un nombre de bille pair ou impair (prompt)
// si je dis pair et que c'est pair => j'ai gagné les billes de l'ennemi + bonus
// si je dis impair et que c'est impair => j'ai gagné les billes de l'ennemi + bonus
// l'ennemi meur donc je le dégage de la list d'enemies

// si je dis impair et que c'est paur => j'ai perdu les billes de l'ennemi - malus
// si je dis pair et que c'est impair => j'ai perdu les billes de l'ennemi - malus

// nbrEncounters--;