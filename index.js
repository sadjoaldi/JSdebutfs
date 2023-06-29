// *****LES VARIABLES (var, const, let): stockage *********
// const prenom = "mariame";
// const nom = " diallo";
// const nomFamille = prenom + nom;
// console.log(nomFamille);

// la variable const ne change pas ce qui n'est pas le cas de la variable let

let ageBebe = "3" + " ans";

let bioblio = "plusieurs livres";
let agent = "surveille : " + bioblio;

// à chaque fois qu'il y a des crochets [] c'est qui'l sagit d'un tableau.
let personne = ["je", "suis", 18, false];

// pour les objets, ce sont des accolades {}; et un objet a deux parametres : une clé (exple: prenom) et une valeur ou propriété(exple: alhassane);

// let objet = {
//   prenom: "alhassaen",
//   ville: "tours",
//   age: 50,
// };

// opérateurs: +; -; /; *; ++; --; +=; -=; *=; ===; !==.
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

// ******LES CONDITIONS ou loop (if, else if, else) et OPERATEUR LOGIQUE: &&(et) et ||(ou): permettent de tester quelque chose et d'executer un code si la condition est verifiée********
//  cas du switch: permet de mettre une condition sur une variable particulière. Donc elle permet de verifier qu'une variable a différentes valeurs. Elle permet de comparer une variable à plusieurs valeurs.

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

// ********LES BOUCLES: while; do...while; et for (for in et for of)**********

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
// function isPremier(n) {
//   if (n < 2) {
//     return false;
//   }
//   On parcours tous les nombres de n jusqu'à 2 dans la variable i
//   for (let i = n - 1; i > 1; i--) {
//     On regarde si le nombre est divisible par i
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

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

const moyenne = (notes) => {
  let sum = 0;
  for (let note of notes) {
    sum = sum + note;
  }
  return sum / notes.length;
};

/*const compareStudents = (a, b) => {
  return b.moyenne - a.moyenne;
};

for (let student of students) {
  student.moyenne = moyenne(student.notes);
  student.worst = Math.min(...student.notes);
  student.best = Math.max(...student.notes);
}
// La fonction sort() en JavaScript est une méthode qui permet de trier les éléments d'un tableau dans l'ordre lexicographique par défaut. Elle peut également trier les éléments dans un ordre personnalisé en utilisant une fonction de comparaison en tant que paramètre. 

students.sort(compareStudents);

const formatStudent = (student) => {
  return `${student.name} avec une moyenne de ${student.moyenne}, meilleur note (${student.best}), pire note (${student.wor})
  `;
};

console.log(`Top 3 etudiants
1:${formatStudent(students[0])} 
2:${formatStudent(students[1])} 
3:${formatStudent(students[2])} 
`);*/

// exo 2:
// const phrase = `Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres. `;
// const frenquencies = {};
// const words = phrase.replaceAll(",", "").toLowerCase().split(" ");
// for (let word of words) {
//   if (word !== "") {
//     frenquencies[word]++;
//   } else {
//     frenquencies[word] = 1;
//   }
// }

// const frequenciesArray = [];
// for (let k in frenquencies) {
//   frequenciesArray.push({
//     word: k,
//     count: frenquencies[k],
//   });
// }
// frequenciesArray.sort((a, b) => b.count - a.count);
// console.log(
//   `les mots les plus frequents sont "${frequenciesArray[0].word}","${frequenciesArray[1].word}", "${frequenciesArray[2].word}",`
// );

// *****LES CLASSES ET LA POO*****

/*PROTOTYPE: En JavaScript, le prototype est un mécanisme qui permet à un objet de référencer un autre objet qui sert de modèle pour les propriétés et les méthodes. Chaque objet en JavaScript a un prototype, qui peut être utilisé pour hériter des propriétés et des méthodes d'un autre objet.
Le prototype est accessible via la propriété __proto__ de l'objet, mais il est recommandé d'utiliser la méthode Object.getPrototypeOf() pour accéder au prototype :*/

/*PROPRIETE :En JavaScript, une propriété est une valeur associée à une clé dans un objet. Les propriétés peuvent être des valeurs primitives (chaînes de caractères, nombres, booléens, etc.) ou des objets eux-mêmes.
On peut accéder aux propriétés d'un objet en utilisant la notation pointée ou la notation crochet :*/

/*METHODE: En JavaScript, une méthode est une fonction associée à un objet. Les méthodes sont des propriétés d'un objet dont la valeur est une fonction.

On peut définir une méthode en utilisant la syntaxe d'objet littéral :*/

/*OBJET: En JavaScript, un objet est une collection de propriétés qui peut contenir des valeurs primitives (chaînes de caractères, nombres, booléens, etc.) ou d'autres objets. Les objets sont créés en utilisant la syntaxe d'objet littéral ou en utilisant la syntaxe de classe.

Voici un exemple d'objet créé en utilisant la syntaxe d'objet littéral :*/

// fonctionnement du systeme d'heritage en js:
// str(objet courant) >> String.prototype >> Object.prototype

class Student {
  ecole = "Jule ferry";

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  setNotes(notes) {
    this.notes = notes;
  }
  get name() {
    return `${this.firstname} ${this.lastname}`;
  }

  canPass() {
    return moyenne(this.notes) >= 10;
  }

  static moyenne = 0;
}

class superStuden extends Student {}

const john = new Student("John", "Doe");
const jane = new Student("Jane", "Doe");
john.setNotes([10, 10, 9]);
jane.setNotes([15, 18, 19]);
console.log(john.canPass(), jane.canPass());

const r = new Rectangle(10, 20);
console.log(r.perimeter);
console.log(r.isValid);
const r2 = new Rectangle(-10, 20);
console.log(r2.isValid);
const c = new Square(10);
console.log(c.perimeter);
console.log(r.isBiggerThan(c));

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get perimeter() {
    return (this.width + this.height) * 2;
  }

  get isValid() {
    return this.width > 0 && this.height > 0;
  }

  isBiggerThan(shape) {
    return this.perimeter > shape.perimeter;
  }
}

class Square extends Rectangle {
  constructor(width) {
    super(width, width);
  }
}
