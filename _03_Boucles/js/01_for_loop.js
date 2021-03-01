for(let i = 0; i < 10; i++){
    document.getElementById('p1').innerHTML +=
    '<i>i</i> stocke la valeur <b>' + i + '</b> lors du passage <u>n°'
    + (i + 1) + '</u> dans la boucle<br>';
}




// -------


// On peut ajouter des conditions dans la boucle
// % est un modulo 
// Il donne comme résultat 
// le reste dans une division 
// 2%2 == 0 
// 4%5


for(let i = 0; i <= 10; i++){
    //Si i / 2 possède un reste, alors i est impair
  let modulo = 4;
    if(i % modulo != 0){
          document.getElementById('p2').innerHTML +=
          '<strike><i>i</i> stocke la valeur <b>' + i + '</b> lors du passage <u>n°'
          + (i + 1) + '</u> dans la boucle (('+  i % modulo  +'))</strike><br>';
        continue;
    }
    document.getElementById('p2').innerHTML +=
    '<i>i</i> stocke la valeur <b>' + i + '</b> lors du passage <u>n°'
    + (i + 1) + '</u> dans la boucle (('+  i % modulo  +'))<br>';
}


