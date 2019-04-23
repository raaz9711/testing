var jumbotron =document.querySelector(".jumbotron");

var addcart=document.querySelector(".addcart");
var cross=document.querySelector(".cross");
var cross1=document.querySelector(".cross1");


var feedback=document.querySelector(".feedback");
var popup=document.querySelector(".popup");
addcart.addEventListener("click",myfunc);
feedback.addEventListener("click",myfunc1);
cross.addEventListener("click",() => {
    popup.style.display="none";
});
cross1.addEventListener("click",() => {
    popup.style.display="none";
});



function myfunc(){
    // document.body.style.opacity="0.2";
    jumbotron.style.display="block";
jumbotron.style.left="220px";
jumbotron.style.top="120px";
// jumbotron.style.opacity="1"


}

function myfunc1(){
    var res=confirm("Wanna add to the cart");
if(res){
    console.log("suceessful");
}
else{
    console.log("Unsuceessful");

}
jumbotron.style.display="none";
}

let tiktikboom= setTimeout(() =>{
    console.log("y have 5 seconds");
    popup.style.display="block";
},2000);