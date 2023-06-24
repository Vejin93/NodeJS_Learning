const name = 'Jelena';
let age = 30;
const hasHobbies = true;

//name = 'Jela';  -- TypeError: Assignment to constant variable.

age = 31;

function summerizeUser(userName, userAge, userHasHobby){
    return ('Name is ' + userName + ', age is ' + userAge + ' and user has hobbies: ' + userHasHobby); 
}

// Anonymous function
const summerizeUser2 = function(userName, userAge, userHasHobby){
    return ('Name is ' + userName + ', age is ' + userAge + ' and user has hobbies: ' + userHasHobby); 
}

// Arrow function
const summerizeUser3 = (userName, userAge, userHasHobby) => {
    return ('Name is ' + userName + ', age is ' + userAge + ' and user has hobbies: ' + userHasHobby); 
}

console.log(summerizeUser3(name,age,hasHobbies)); 