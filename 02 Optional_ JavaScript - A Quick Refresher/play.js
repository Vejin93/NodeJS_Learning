const name = 'Jelena';
let age = 30;
const hasHobbies = true;

//name = 'Jela';  -- TypeError: Assignment to constant variable.

age = 31;

function summerizeUser(userName, userAge, userHasHobby){
    return ('Name is ' + userName + ', age is ' + userAge + ' and user has hobbies: ' + userHasHobby); 
}

console.log(summerizeUser(name,age,hasHobbies)); 