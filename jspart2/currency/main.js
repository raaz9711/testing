document.addEventListener('DOMContentLoaded',() =>{
    document.querySelector("#form").onsubmit = () => {
const currency =document.querySelector("#currency").value;
fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols')
    }
});