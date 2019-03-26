function hello(){
const headings = document.querySelectorAll("h1");

for(const heading of headings){
    heading.innerHTML="Hello!";
}
}
var a=document.querySelector("#count");
var b=0;
function count(){
    b++;
    a.innerHTML=b;
}