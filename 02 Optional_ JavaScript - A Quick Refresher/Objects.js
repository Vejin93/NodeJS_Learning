const person = {
    name: 'Jelena',
    age: 30,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();