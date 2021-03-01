let x = 0, a = 0;
let y = 10, b = 10;

//Tant que...
while(x < 10){
    //...exécute ce code
    document.getElementById('p1').innerHTML +=
    'x stocke la valeur <b>' 
    + x + 
    '</b> lors du passage <u>n°'
    + (x + 1) + 
    '</u> dans la boucle<br>';
  
    x++;
}



// -----



//Faire... tant que
do{
    document.getElementById('p2').innerHTML +=
    '<i>a</i> stocke la valeur <b>'
    + a + 
    '</b> lors du passage <u>n°'
    + (a + 1) + 
    '</u> dans la boucle<br>';
  
    a++;
}
while(a < 10);



// -----




//Ne renvoit rien, condition non satisfaite ( y == 10 )
while(y < 10){
    document.getElementById('p3').innerHTML +=
    '<i>y</i> stocke la valeur <b>' 
    + y + 
    '</b> lors du passage <u> n°'
    + (y + 1) + 
    '</u> dans la boucle<br>';
  
    y++;
}


// -----




do{
    document.getElementById('p4').innerHTML +=
    '<i>b</i> stocke la valeur <b>' + b + '</b> lors du passage <u>n°'
    + (b + 1) + '</u> dans la boucle<br>';
  
    b++;
}
while(b < 10);