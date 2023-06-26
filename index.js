// *****LES VARIABLES*********
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

// pour les objets, ce sont des accolades {}; et un objet a deux parametres : une clé (exple: prenom) et une valeur(exple: alhassane);

let objet = {
  prenom: "alhassaen",
  ville: "tours",
  age: 50,
};

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

// ******LES CONDITIONS********
//  cas du switch: permet de mettre une condition sur une variable particulière. Donc elle permet de verifier qu'une variable a différentes valeurs

// const pays = "";

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

// ********LES BOUCLES: while; do...while; et for**********

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
// if (chiffres > 10 || chiffres < 0) {
//   console.log("le nombre n'est pas entre 0 et 10");
// } else {
//   while (chiffres >= 0) {
//     console.log(chiffres);
//     chiffres--;
//   }
// }

// ****LES FONCTIONS***********
// les fonctions sont un type d'objet particulier
// les fonction classique
function canDrive(age, pays) {
  if ((age >= 18 && pays === "FR") || (age >= 16 && pays === "US")) {
    return true;
  }
  return false;
}

// les fonction flechées
const maFonction = () => {};

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// nombre aleatoire en JS
// const solution = getRandomInt(10);
// console.log(solution);

// function isRight(n) {
//   return solution === n;
// }

// function guess() {
//   const number = prompt("choisir un chiffre") * 1;
//   return isRight(number);
// }

// for (i = 0; i < 3; i++) {
//   if (guess()) {
//     console.log("bravo");
//     break;
//   } else if (i === 2) {
//     console.log("vous avez perdu");
//   }
// }

// exo 2 sur les nombres premiers

// function isPremier(n) {
//   for (let i = n - 1; i > 1; i--);
//   console.log(i);
// }

// console.log(isPremier(0));
// console.log(isPremier(1));
// console.log(isPremier(2));
// console.log(isPremier(3));
// console.log(isPremier(11));
// console.log(isPremier(12));
function isPremier(n) {
  if (n < 2) {
    return false;
  }
  // On parcours tous les nombres de n jusqu'à 2 dans la variable i
  for (let i = n - 1; i > 1; i--) {
    // On regarde si le nombre est divisible par i
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// function isPalindrome(word) {
//   const letters = word.split("");
//   letters.reverse();
//   const reversedWord = letters.join("");
//   console.log(reversedWord);
//   return word.toUpperCase() === reversedWord;
// }

// const words = {
//   Kayak: true,
//   SOS: true,
//   kayak: true,
//   bonjour: false,
// };
// for (let word in words) {
//   if (isPalindrome(word) !== words[word])
//     console.error(`isPalendrome(${word})`);
// }

const students = [
  {
    name: "John",
    notes: [1, 20, 18, 19, 12],
  },
  {
    name: "Jane",
    notes: [17, 18, 20, 13, 15],
  },
  {
    name: "Sophie",
    notes: [17, 12, 14, 15, 13],
  },
  {
    name: "Marc",
    notes: [2, 3, 5, 8, 9],
  },
  {
    name: "Manon",
    notes: [18, 17, 18, 19, 12],
  },
];
function calculerMoyenne(students) {
  let somme = 0;
  for (let i = 0; i < students.length; i++) {
    somme += students[i];
  }
  let moyenne = somme / students.length;
  return moyenne;
}

let monTableau = [
  {
    name: "John",
    notes: [1, 20, 18, 19, 12],
  },
  {
    name: "Jane",
    notes: [17, 18, 20, 13, 15],
  },
  {
    name: "Sophie",
    notes: [17, 12, 14, 15, 13],
  },
  {
    name: "Marc",
    notes: [2, 3, 5, 8, 9],
  },
  {
    name: "Manon",
    notes: [18, 17, 18, 19, 12],
  },
];
let maMoyenne = calculerMoyenne(monTableau);
console.log(maMoyenne); // affiche 6
