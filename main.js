// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de parent/enfant/premier element/dernier element/ etc.. PART 1*

// ### 1. Stock la balise body dans une variable du nom de "myBody"
// ### 2. Trouve une méthode pour récuperer le premier élément de "myBody" et affiche le dans un console.log
// ### 3. Trouve une méthode pour récuperer le dernièr élément de "myBody" et affiche le dans un console.log
// ### 4. Trouve une méthode pour récuperer tous les enfants de la premiere div puis stock dans une variable "exo4" et affiche la dans un console.log
// ### 5. Récupère le premier li, puis trouve une méthode JS pour afficher l'élément suivant( c'est a dire le second li ) et affiche le résultat dans un CL
// ### 6. Récupère le second élément puis trouve une méthode JS pour afficher l'élément précédant( c'est a dire le premier li ) et affiche le résultat dans un CL


let myBody = document.getElementsByTagName('body')[0];
console.log(myBody.firstElementChild);
console.log(myBody.lastElementChild);

let exo4 = document.getElementsByTagName('div')[0];
console.log(exo4);

let firstLi = document.getElementsByTagName('li')[0];
console.log(firstLi.nextElementSibling);

let secondLi = document.getElementsByTagName('li')[1];
console.log(secondLi.previousElementSibling);


//exo1
let myBody = document.getElementsByTagName('body')[0];
console.log(myBody);

//autre maniere
let myBody = document.body; //ne fonctionne qu'avec le document body. pas de document.h1 --> pas possible !
console.log(myBody);

//exo2
console.log(myBody.firstElementChild);

//exo3
console.log(myBody.lastElementChild);

//exo4
let exo4 = document.getElementsByTagName('div')[0];
let children = exo4.children;
console.log(children)

//exo5
let li = document.getElementsByTagName('li')[0];
let nextChild = li.nextElementSibling;
console.log(nextChild);

//exo6 
let secondLi = document.getElementsByTagName('li')[1];
let refirstLi = secondLi.previousElementSibling;
console.log(refirstLi);