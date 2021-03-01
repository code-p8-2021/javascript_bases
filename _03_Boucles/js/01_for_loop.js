for(let i = 0; i < 10; i++){
    document.getElementById('p1').innerHTML +=
    '<i>i</i> stocke la valeur <b>' + i + '</b> lors du passage <u>n°'
    + (i + 1) + '</u> dans la boucle<br>';
}




// -------


// On peut ajouter des conditions dans la boucle
// % c'est le modulo 
// c'est l'écart qu'il reste entre le premier chiffre (i) et le second (2)
// une fois que l'un divise l'autre...
// 2/2 == 0 
// 


for(let i = 0; i <= 10; i++){
    //Si i / 2 possède un reste, alors i est impair
    if(i % 5 != 0){
          document.getElementById('p2').innerHTML +=
          '<strike><i>i</i> stocke la valeur <b>' + i + '</b> lors du passage <u>n°'
          + (i + 1) + '</u> dans la boucle</strike><br>';
        continue;
    }
    document.getElementById('p2').innerHTML +=
    '<i>i</i> stocke la valeur <b>' + i + '</b> lors du passage <u>n°'
    + (i + 1) + '</u> dans la boucle<br>';
}


