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

