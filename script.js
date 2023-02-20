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
  hasDuplicates( [1,1,2])
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

   //  retourner un tableau sans doublon , un array ordonné
   function removeDuplicates (nums) {
   
      if (nums.length == 0) return 0;
      let len = 1;
       for(let i= 1; i <= nums.length-1;i++){
         if (nums[i] !== nums[i-1]) {
             nums[len] = nums[i]; 
             len +=1;
            }
       }
      
      return len;
      
  };

  function LongestWord(sen) {
   let result = "";
   sen = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
   const array = sen.split(" ");
   for (let i = 0; i < array.length - 1; i++) {
       if (array[i].length >= array[i + 1].length) {
           result = array[i];
       }
       else {
           result = array[i + 1];
       }
   }
   // code goes here  
   return result;
}
// keep this function call here 
// @ts-ignore
console.log(LongestWord("fun&!! time"));

