

console.log(this);

const tab = new Array();
tab.test = 12;
console.log(tab);



document.addEventListener('DOMContentLoaded',function(){

    const clickButton = function(event) {
        console.log(this);
        console.log(event);
        event.currentTarget.classList.toggle('toto');
    }

    document.querySelector('#test').addEventListener('click', clickButton);

    /* window.setInterval(function(){
        console.log('t');
        console.log(this);
    }, 1000); */

    console.log(this);

    



});




