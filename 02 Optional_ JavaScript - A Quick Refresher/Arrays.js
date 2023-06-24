const hobbies = ['Flowers','Movies','Books'];

/* for (let hobby of hobbies) {
    console.log(hobby);
} */

//console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

//console.log(hobbies);

hobbies.push('Yoga');

/* for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

console.log(hobbies); */

//Spread operator - ...
const coppiedArray = [...hobbies];
console.log(coppiedArray);

//Rest operator - ...
const toArray = (...args) => {
    return args;
};

console.log(toArray(1,2,3));