function myfunction(x){
    x.classList.toggle("change");
}


var navbtn =document.querySelector("#navbtn");
var ulelem=document.querySelector(".ulelem");
var xbtn =document.querySelector(".xbtn");
navbtn.addEventListener("click",anim);
xbtn.addEventListener("click",animx);

function anim(){
    ulelem.style.display="block";
    // ulelem.style.width="100%";
    // navbtn.style.right="0px"
    ulelem.style.animationName ="toptodown";
// console.log(window.innerHeight);
var menlen=window.innerHeight+window.scrollY;
ulelem.style.height=menlen+"px";
if(window.scrollY){
    console.log("in if loop");
ulelem.style.height=menlen+"px";

}
// console.log(window.body.offsetHeight);
}
// console.log(window.scroll);

function animx(){
    ulelem.style.display="none";
    navbtn.classList.toggle("change");
}

scroll=document.querySelector(".scroll");
console.log(window.scrollY);
// if(window.scroll>10){
// scroll.style=""}
window.addEventListener("scroll",scrollfun);
 function scrollfun(){
     scroll.style.display="block";

    var hth1=document.body.offsetHeight;
    console.log("height total"+hth1)
    console.log(window.scrollY);
    // var sct=window.scrollY+window.innerHeight;
    var sct=window.scrollY;
    sct=sct+window.innerHeight;
    console.log("sct value"+sct)
var per=(sct/hth1)*100;    
    console.log("percentage: " +per);
    scroll.style.width=per+"%";
}