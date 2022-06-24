// Mes Algo
function ConsonantCount(str){
    let masque = /[bcdfghjklmnpqrstvwxz]/gi
    let nbr = 0;
   for (let i=0; i<str.length;i++){
    (str[i].search(masque))?nbr: nbr+=1
   }
   return nbr;
}
function FirstFactorial(num){
(num < 2)? num = 1:num = num * FirstFactorial(num-1);
return num;
}
      function camelCase(str){
    let nbr = 0
    for(let i=0 ; i < str.length; i++){
    (str == "")?nbr:((str.charAt(i)==str.charAt(i).toUpperCase())?nbr=nbr+1:nbr=nbr+0)
    }
    return nbr+1
}
function PalindromeTwo(str) { 
    let value = false
    str = str.replace(/\W/g, "").toUpperCase();
    (str == str.split("").reverse().join(""))?value=true:value=false;
     return value
  }
function valMinMax(array){
        array.sort((a,b)=> a-b)
         let sommin = 0;
         let sommax = 0;
         for(let i = 0 ; i<array.length-1;i++){
            sommin += array[i] 
         }
         for(let i = 1 ; i<array.length;i++){
            sommax += array[i] 
         }
         return(sommin + " " + sommax)
    }
    function hasDuplicates(array) {
      // vérifier si le tableau contien  des doublons
     console.log((new Set(array)).size !== array.length);
     // supprimer un doublon
     console.log([...new Set(array)]) ;
  }
  function DoublonElement(array){
     array.sort((a,b)=>a-b)
     let verify = []
     for(let i= 0;i<array.length-1;i++){
       if (array[i + 1] == array[i]) {
          verify.push(array[i])
          }
     }
     return(verify);
    }

