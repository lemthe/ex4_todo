function count(limit) {
    for (var i=0; i<=limit; i++) {
        console.log(i);
    };

} // limit: int - logue tous les entiers de 0 à limit


function decount(limit) {
    for (var i=limit; i>=0; i--) {
        console.log(i);
    };

} // limit : int - logue tous les entiers de limit à 0


function max(a, b) {
    if (a>b) {
        console.log(a);
    } else {
        console.log(b);
    };

} // a, b: int - retourne la plus grande valeur entrte a et b


function moyenne(a, b, c) {
    console.log((a+b+c)/3);

} // a, b, c: int - retourne la moyenne de a, b, c


function moyenne(tab) {
    let s=0;
    for (var i=o; i<tab.length; i++) {
        s+=tab[i];
    }
    console.log(s/tab.length);

} // tab: array - retourne la moyenne des éléments de array


function somme_Indet() {
    let s=0;
    for (i=0; i<arguments.length; i++) {
        s+=arguments[i];
    }
    return s;

} // retourne la somme des paramètres (tous!) -> utiliser la variable implicite arguments

// A faire pour la prochaine fois :

function count(limit, sens) {}
// sens : ascendant ou descendant

function concat() {} 
// retourne une concaténion de tous les arguments renvoi 
//chaque chaine de caractètes tous débarassés par des espaces