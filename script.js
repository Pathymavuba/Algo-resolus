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
  