class Person {

    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    sayHello() {
        console.log(this);
        console.log(`Hello my name is ${this.firstname} ${this.lastname}`);
    }

}