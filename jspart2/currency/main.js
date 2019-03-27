document.addEventListener('DOMContentLoaded',() =>{
    document.querySelector("#form").onsubmit = () => {
const currency =document.querySelector("#currency").value;
console.log(currency);
fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${currency}`).then(
    response => response.json()).then(
        data => {
            const contents = `1 USD is equal to ${data.rates[currency]} ${currency}.`;
            document.querySelector("#result").innerHTML=contents;

        }).catch( () =>{
            document.querySelector("#result").innerHTML="there was an Error!";
        });
return false;
    };
    
});