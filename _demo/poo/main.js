
const person1 = new Person('fabien', 'sellès');

document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#test').addEventListener('click', person1.sayHello );


});