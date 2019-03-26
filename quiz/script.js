const questions = [
    {
        question: "What is 10 + 10 ?",
        options: ["12","44","55","20"],
        answer: "20"
    },
    {
        question: "What is 10 * 10 ?",
        options: ["225","440","100","210"],
        answer: "100"
    }
];

let question_number=0;

let correct=0;

document.addEventListener("DOMContentLoaded",()=>{
    load_question();
});

function load_question(){
    document.querySelector("#question").innerHTML=questions[question_number].question;
    const options=document.querySelector("#options");
    options.innerHTML='';
    for(const option of questions[question_number].options){
        // console.log(option);
        options.innerHTML+=`<button class="option">${option}</button>`;
    }
    document.querySelectorAll(".option").forEach(option =>{
        option.onclick= () =>{
            if(questions[question_number].answer==option.textContent){
                correct++;
     document.querySelector("#correct").innerHTML=`${correct}`+" out "+`${question_number+1}`+"is correct";

            }
            else{
                document.querySelector("#correct").innerHTML=`${correct}`+" out "+`${question_number+1}`+"is correct";
 

            }
        }
     });

}