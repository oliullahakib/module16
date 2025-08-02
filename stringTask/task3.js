// ****** mathod find out vowel and consonent in a sentence 
// let sentence = `JavaScrip is a language`;
// let letter = sentence.split('');

// for (const element of letter) {
//     let str = element;
//     str = str.toLocaleLowerCase();
//     if(str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u'){
//         console.log(str,": is a vowel");
//     }
//     else if(str === ' '){
//         continue;
//     }
//     else{
//         console.log(str,': is a consonent');
//     }
// }

// ********* check whether a string contains all the vowels *****
let sentence = `Aeio`;
    sentence = sentence.toLocaleLowerCase();
let letter = sentence.split('');
if(letter.includes('a') && letter.includes('e') && letter.includes('i') && letter.includes('o') && letter.includes('u')){
    console.log("The string contain all the vowels");                      
}
else{
    console.log("The string does't contain all the vowels");   
}