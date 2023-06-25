// alert ("heure de prière");
// console.log("coucou");

// const prenom = "mariame";
// const nom = " diallo";
// const nomFamille = prenom + nom;
// console.log(nomFamille);

// la variable const ne bouge pas ce qui n'est pas le cas de la variable let

let ageBebe = "3" + " ans";

let bioblio = "plusieurs livres";
let agent = "surveille : " + bioblio;

// à chaque fois qu'il y a des crochets [] c'est qui'l sagit d'un tableau.
let personne = ["je", "suis", 18, false];

// console.log(array);

// pour les objets, ce sont des accolades {}; et un objet a deux parametres : une clé (exple: prenom) et une valeur(exple: alhassane);

let objet = {
  prenom: "alhassaen",
  ville: "tours",
  age: 50,
};

// console.log(objet);

// opérateurs:
// console.log(8*9);
// console.log(4/88956);
// console.log(22548+653159);
// console.log(5-6);

// structure de controle
// let x = 3255;
// let y = 13554;

// if (x > y) {
//     alert ("attention")
// }
// else{
//    alert ("l'inverse");
// }

// les fonction classique
function faireQuelqueChose() {}

// faireQuelqueChose();

// les fonction flechées
let operation = () => {};

// les conditions:  cas du switch: permet de mettre une condition sur une variable particulière. Donc elle permet de verifier qu'une variable a différentes valeurs

const pays = "";

// switch (pays) {
//   case "FR":
//     console.log("je suis en France !");
//     break;
//   case "US":
//     console.log("je suis au USA !");
//     break;
//   default:
//     console.log("je suis dans un autre pays");
//     break;
// }

// const year = 2023;
// const birhtYear = prompt("Quel est votre annee de naissance ?");
// const age = year - birhtYear;

// if (age <= 13) {
//   console.log("Je vous conseil de regarder Lilo & Swith");
// } else if (age <= 18) {
//   console.log("Je vous conseil de regader Matrix");
// } else {
//   console.log("Je vous conseil de regarder Evil Dead");
// }
// 200;

// const a = prompt("Entrez un premier chiffre");
// const b = prompt("Entrer un second chiffre");
// const result = a * b;
// let signe;

// if (result > 0) {
//   signe = "positif";
// } else {
//   signe = "negative";
// }
// console.log(`${a}x${b}=${result} est ${signe}`);

// les boucles: while; do...while; et for

// boucle de parcourt de tableau ou d'iteration(repetition) sont les 2 cas d'utilisation de la boucle for
const notes = [12, 13, 15, 9];
for (let i = 0; i < notes.length; i++) {
  //   console.log(i);
}
// une autre maniere de parcourir les indexs et peut aussi etre utiliser pour un objet
const notess = [14, 11, 18, 4];
const person = {
  firstName: "John",
  lastName: "Doe",
};
for (let i in notess) {
  //   console.log(notess[i]);
}
// le for of ne va marché que sur des choses iterable comme les array et pas sur les objets qui marche avec le for in
// for (let notes of person) {
//     console.log(notes);
// }
const personn = "anticonstitutionnalite";
for (let letter of personn) {
  //   console.log(letter);
}

// let chiffres = prompt("veuillez entrer le chiffre svp !");
if (chiffres > 10 || chiffres < 0) {
  //   console.log("le nombre n'est pas entre 0 et 10");
} else {
  while (chiffres >= 0) {
    // console.log(chiffres);
    chiffres--;
  }
}
let chifre;
let guess = 8;
while (chifre !== guess) {
  //   chifre = prompt("votre chiffre") * 1;
  if (chifre !== guess) {
    console.log("veuiller reessayer");
  }
}
console.log("felicitation ! vous etes un crack");
