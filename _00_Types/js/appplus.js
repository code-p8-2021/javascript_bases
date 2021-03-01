
let eleves = ['Jean', 'Marc', 'Marion'];
let demo = [true, 10, 'Marc'];
console.log("eleves == "+ eleves);
console.log("demo == "+ demo);

console.warn("\n\n----\n\n");



let eleve = {
   clef: 'valeur',
   nom: 'Jean',
   age: 18,
   notes: [10, 4, 18] 
}
console.log("eleve == "+ eleve);
console.log("eleve.nom == "+ eleve.nom); // Jean
console.log("eleve.notes == "+ eleve.notes); // [10, 4, 18]
console.log("eleve.notes[1] == "+ eleve.notes[1]); // 4
// On peut aussi utiliser une notation proche de celle des tableaux
console.log(eleve['notes']); // [10, 4, 18]

console.warn("\n\n----\n\n");





let eleve_carnet = {
    notes: {
        math: 18,
        francais: 14   
    }   
}
// Pour récupérer la note de math de l'élève on peut alors faire
console.log(eleve_carnet.notes.math); // 18
console.log(eleve_carnet.nom); // undefined