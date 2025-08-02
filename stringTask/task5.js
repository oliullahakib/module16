let secntence = 'javaScrip is my favorit pogramming language';
let word = secntence.split(' ');
let newSentence ="";
for (const element of word) {
    let upperCase = element[0].toLocaleUpperCase();
    let slice = element.slice(1)
    let lowerCase = slice.toLocaleLowerCase();
    let newWord = upperCase.concat(lowerCase);
    // let newWordArray = newWord.split(' ')
    //  newSentence = newWordArray.join(' ');
    newSentence = newSentence +' '+ newWord;

}
let modifySentence = newSentence.trim();
console.log(modifySentence);