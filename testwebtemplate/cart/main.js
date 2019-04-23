var jumbotron =document.querySelector(".jumbotron");

var addcart=document.querySelector(".addcart");

var feedback=document.querySelector(".feedback");
addcart.addEventListener("click",myfunc);
feedback.addEventListener("click",myfunc1);

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