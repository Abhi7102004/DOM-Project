const questions = [
  {
    question:"Which is largest City in India ?",
    answers:[
      { text:"Bengaluru", correct:false },
      { text:"Delhi", correct:true },
      { text:"VishakhaPatnam", correct:false },
      { text:"Hyderabad", correct:false },
    ]
  },
  {
    question:"Which is Biggest Snake in India?",
    answers:[
      { text:"Indian Rock Python", correct:true },
      { text:"Black Cobra", correct:false },
      { text:"Russel Viper", correct:false },
      { text:"Everyone's Ex", correct:false },
    ]
  },
  {
    question:"What body of water lies to the west of India?",
    answers:[
      { text:"Andaman Sea", correct:false },
      { text:"Coral Sea", correct:false },
      { text:"Celebes Sea", correct:false },
      { text:"Arabian Sea", correct:true },
    ]
  },
  {
    question:"Which Indian festival is associated with colors?",
    answers:[
      { text:"Deepawali", correct:false },
      { text:"Onam", correct:false },
      { text:"Chhath Puja", correct:false },
      { text:"Holi", correct:true },
    ]
  },
  {
    question:"India is a federal union comprising twenty-eight states and how many union territories?",
    answers:[
      { text:"7", correct:false },
      { text:"9", correct:false },
      { text:"8", correct:true },
      { text:"6", correct:false },
    ]
  },
  {
    question:"Which of the following states is not located in the North?",
    answers:[
      { text:"Jharkhand", correct:true },
      { text:"Jammu and Kashmir", correct:false },
      { text:"Haryana", correct:false },
      { text:"Himachal Pradesh", correct:false },
    ]
  },
  {
    question:"Which state has the largest area?",
    answers:[
      { text:"Maharasthra", correct:false },
      { text:"Rajashthan", correct:true},
      { text:"Uttar Pradesh", correct:false },
      { text:"Madhya Pradesh", correct:false },
    ]
  },
];

const question =document.getElementById("question");
const answerbtn =document.getElementById("ans-btn");
const nextbtn =document.getElementById("next-btn");

let currentquestionidx=0;
let score=0;
// Function to shuffle an object
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function startquiz(){
  currentquestionidx=0;
  score=0;
  nextbtn.innerHTML="Next";
  showquiz();
}
function showquiz(){
  removepreviousquestion();
  let currentquestion=questions[currentquestionidx];
  let questionnumber=currentquestionidx+1;
  question.innerHTML=questionnumber + "-> " + currentquestion.question;
  currentquestion.answers.forEach(answer =>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerbtn.appendChild(button);
    if(answer.correct){
      button.dataset.correct=answer.correct;
    }
    button.addEventListener("click", ()=>{
      const isCorrect=button.dataset.correct==="true";
      if(isCorrect){
        button.classList.add("correct");
        score++;
      }
      else{
        button.classList.add("incorrect");
      }
      Array.from(answerbtn.children).forEach(btn =>{
         if(btn.dataset.correct==="true"){
           btn.classList.add("correct");
         }
         btn.disabled=true;
         btn.style.cursor = "no-drop";
      })
      nextbtn.style.display="block";
    })
  })
}
function removepreviousquestion(){
  nextbtn.style.display="none";
  while(answerbtn.firstChild){
    answerbtn.removeChild(answerbtn.firstChild);
  }
};
function showScore(){
  removepreviousquestion();
  question.innerHTML=`You scored ${score} out of ${questions.length}`;
  nextbtn.innerHTML="Play Again";
  nextbtn.style.display="block";
}
function handleNextButton(){
  currentquestionidx++;
  if(currentquestionidx<questions.length){
    showquiz();
  }
  else{
    showScore();
  }
}
nextbtn.addEventListener("click",()=>{
  if(currentquestionidx<questions.length){
    handleNextButton();
  }
  else{
    shuffleArray(questions);
    startquiz();
  }
})
shuffleArray(questions);
startquiz();
