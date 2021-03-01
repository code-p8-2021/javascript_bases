// ((error))
b // undefined
let b = 3
console.log("b. => " +b);  

// ------

// Mais pas dans ce cas, la fonction est automatiquement "montée"
// elles sont toutes lues avant le reste du code
// Du coup on peut utiliser une fonction déclarée plus bas dans le code...
maFonction(); // 3
function maFonction () {
    return 3    
}