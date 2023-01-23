class Person {

    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    sayHello() {
        console.log(this);
        return `Hello my name is ${this.firstname} ${this.lastname}`;
    }

}