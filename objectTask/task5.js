let myObj = {
    name: 'John Doe',
    age:25,
    city: 'Example City',
    isStudent:true
}
let index = 0;
for (const key in myObj) {
    let value = Object.values(myObj);
    // console.log(value)
    console.log(`key: ${key} | type: ${typeof value[index]}`);
    index++;
    
}