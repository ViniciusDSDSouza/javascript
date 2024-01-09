function myFunction() {

    this.name = 'Vinicius';

    const myArrowFunction = () => {
        this.lastName = 'Souza';
    };

    myArrowFunction();
}

console.log(new myFunction());
console.log(this);