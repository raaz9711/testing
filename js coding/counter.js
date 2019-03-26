document.addEventListener("DOMContentLoaded",()=>{
    // document.querySelector("button").onclick()=count;
document.querySelector('#new-task').onsubmit = () =>
{
    const li =document.createElement('li');
    li.innerHTML=document.querySelector('#task').value;

    document.querySelector('#tasks').append(li);

    document.querySelector('#task').value='';

    


//     document.querySelectorAll('.color-change').forEach(function(button){
//         button.onclick= function(){
//             document.querySelector("#hello1").style.color=button.dataset.color;
//         };

//     });
//     document.querySelector("input").onchange=disp;
//         document.querySelector("#red").onclick=function(){
//             document.querySelector("#hello").style.color="red";
        
//     }
//     document.querySelector("#blue").onclick=function(){
//         document.querySelector("#hello").style.color="blue";
    
// }
// document.querySelector("#green").onclick=function(){
//     document.querySelector("#hello").style.color="green";
return false;
}

});


// document.querySelector("button").onclick=count;
let counter=0;

function count(){
    counter++;
    document.querySelector("#counter").innerHTML=counter;
}
function disp(){
    var a=document.querySelector("input").value;
    document.querySelector("p").innerHTML=a;
   // document.querySelector("#hello").onclick=function(){
    document.querySelector("#hello").style.color="#"+a;

    }
