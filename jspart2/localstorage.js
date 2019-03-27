//set starting value of conter = 0

if(!localStorage.getItem('counter'))
localStorage.setItem('counter',0);

//Load current value of counter 

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#counter1").innerHTML=localStorage.getItem('counter');

    // count every time button is clicked

    document.querySelector("button").onclick = () => {
let counter= localStorage.getItem('counter');
counter++;

//update counter
document.querySelector("#counter1").innerHTML=counter;
localStorage.setItem('counter',counter);
    }
});
