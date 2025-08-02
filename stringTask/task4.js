let sentence = 'xiomi is my xisister';
let letter = sentence.split('');
 let newSentence;
for (const element of letter) {
    if(element === 'x'){
       let index = letter.indexOf(element);
       letter[index] = 'y';
        newSentence = letter.join('');
    }
    else if(element === 'X'){
       let index = letter.indexOf(element);
       letter[index] = 'Y';
        newSentence = letter.join('');
    }
}
console.log(newSentence);