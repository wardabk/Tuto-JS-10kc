//  alert('Salut JS');

/* commenter
plusieurs
lignes*/

// Kamel Case
let maSuperVariable = "Hello";

//  ** Les variables **

// var = vieux JS
var unTexte = "voici un texte";

// const= constante
const prenom = "justine";

// Let = la variable peut évoluer
let unChiffre = 24;
unChiffre = 22;

let chaine = "je suis l'une des chaines de caractères";

let nouvelleChaine =
  "Chaine précedente :" + chaine + ". Voila c'était le contenu";

//Concaténation avec guillements alt gr+7
let autreConcatenation = `Chaine précedente : ${chaine} . Voila c\'était le contenu`;
console.log(nouvelleChaine);
console.log(autreConcatenation);

//** Types de données **
let string = "je suis une chaine de caracrère";
let number = 24;
let boolean = false;

//Tableau : il y a des crochéts []
let array = ["je", "suis", 47, true];

//Objet : accolades {}
let object = {
  prenom: "audrey",
  age: 33,
  ville: "bordeaux",
};

let arbre;

// ** les opérateurs **

// console.log(4 + 5);
// console.log(4 - 5);
// console.log(4 * 5);
// console.log(4 / 5);
// // puissance
// console.log(4 ** 5);

// ** opérateurs d\'affectations **
let total = 0;
total = total + 1;
total++;

total += 5;
total -= 4;
total *= 2;
console.log(total);
// ** structure de controle **
let x = 2;
let y = 5;

//   if (x > y) {
//     alert('yes x plus grand que y');
//   }
//   else if ( y> x){
//     alert('y plus grand !');
//   }
//   else
//   {
//     alert('ils sont egaux');
//   }

// on teste si la variable est 'true'
if (x) {
  console.log("x existe !");
}
// teste l'egalité en type et valeur
if (x === y) {
  console.log("ils sont egaux");
} else {
  console.log("pas egaux !");
}

let a = 2;
let b = 2;
// teste l'egalité de valeur sans prendre en compte le type
if (a == b) {
  console.log("ils sont egaux");
} else {
  console.log("pas egaux !");
}

// || ou
// && et

if (x < y || x > 1) {
  console.log("UI");
}

// && il faut que toutes les conditions soit réunies
if (x < y && x > 1) {
  console.log("UI");
}

// ** les fonctions **
function faireQuelquesChose() {
  console.log("je fais un truc");
  console.log(5 + 6);
  alert("calcule terminé !");
}
// il faut ipérativement appeler la fonction pour qu'elle joue
// appel de la fonction: faireQuelquesChose();

// fonction flechée
const addition = (a, b) => {
  console.log(a + b);
};
addition(4, 3);
addition(432, 578481);
/**l la portée des variables */

function add2() {
  let num = 4;
  console.log(num + 2);
}

console.log(num);
