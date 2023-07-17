const numberGenerator = Math.ceil(Math.random()*20);
const numberGenerator2 = Math.ceil(Math.random()*20);

const questionElement = document.getElementById("question")

const formElement = document.getElementById("form")

let score = 0;

const inputElemet = document.getElementById("input")

questionElement.innerText = `what is ${numberGenerator} multiply by ${numberGenerator2}?`

const correctAnswer = numberGenerator * numberGenerator2

formElement.addEventListener("submit", () =>{
  const userAnswer = inputElemet.value;

  if (userAnswer === correctAnswer) {
   score++ ;
   updateLocalStorage()
  }else{
    score--;
    updateLocalStorage()
  }
})


function updateLocalStorage(){
  localStorage.setItem("score", JSON.stringify(score))
}
