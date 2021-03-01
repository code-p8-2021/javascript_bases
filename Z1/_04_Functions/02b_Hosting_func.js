console.log("\n\n02b_Hosting_func.js ::\n");  
//...
// Mais pas dans ce cas, la fonction est automatiquement "montée"
// elles sont toutes lues avant le reste du code
// Du coup on peut utiliser une fonction déclarée plus bas dans le code...

maFonction_hosted(); // => 3
function maFonction_hosted () {
    console.log("maFonction_hosted => "+3)    
}






