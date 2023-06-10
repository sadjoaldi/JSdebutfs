// alert ("heure de prière"); 
// console.log("coucou");

// const prenom = "mariame"; 
// const nom = " diallo"; 
// const nomFamille = prenom + nom;
// console.log(nomFamille);

// la variable const ne bouge pas ce qui n'est pas le cas de la variable let

let ageBebe = "3" + " ans"; 
// console.log(ageBebe);

let bioblio = "plusieurs livres"
let agent = "surveille : " + bioblio
// console.log(agent);

// à chaque fois qu'il y a des crochets [] c'est qui'l sagit d'un tableau. 
let array = ["je", "suis", 18, false]
// console.log(array);

// pour les objets, ce sont des accolades {}; et un objet a deux parametres : une clé (exple: prenom) et une valeur(exple: alhassane);

let objet = {
    prenom : "alhassaen",
    ville : "tours",
    age : 50
}

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
function faireQuelqueChose() {
    console.log("j'apprend JS");
    console.log(5 + 658);
    alert("resultat correct")
}

// faireQuelqueChose();

// les fonction flechées 
let operation = (a, b) => {
console.log(a * b);
}

operation(58896, 2354716);