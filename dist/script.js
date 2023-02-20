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
