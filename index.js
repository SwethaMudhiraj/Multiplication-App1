const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*100)


const questionEL = document.getElementById("question");

const inputEL = document.getElementById("input");
const formEL = document.getElementById("form");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score)
{
    score = 0;
}
scoreEl.innerText = `score: ${score}`

questionEL.innerText =`What is ${num1} multiply by ${num2} ?`

const correctAns = num1*num2

formEL.addEventListener("submit",() =>{
     
    const userAns = +inputEL.value 
    if(userAns==correctAns){
        score++;
       updateLocalStorage()
    }
    else{
        score--;
       updateLocalStorage()
    }
});


function updateLocalStorage(){

    localStorage.setItem("score",JSON.stringify(score))
}

