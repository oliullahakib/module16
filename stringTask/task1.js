let details = "my name is akib. and i want do became a web devoloper."
let letter = details.split('');
let sum = 0;
for (const element of letter) {
    for (let str = element; str === 'a'; str = str.indexOf(str) + 1) {
        sum = sum + 1;
        // console.log(sum)
    }
}
console.log(sum);
// console.log(letter[1]);