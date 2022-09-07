const buttonPlayer1=document.getElementById('btnPlayer1')
const spanPlayer1 = document.getElementById('spanPlayer1')
const scoreToWinElement = document.getElementById('winScore')

const buttonPlayer2=document.getElementById('btnPlayer2')
const spanPlayer2 = document.getElementById('spanPlayer2')

const resetButton =document.getElementById('btnReset');

let scoreplayer1=0;
let scoreplayer2=0;



let scoreToWin = scoreToWinElement.value || 5;

function clickPlayer1Button(){
   scoreplayer1++;
   spanPlayer1.textContent=scoreplayer1;
   if(scoreplayer1>=scoreToWin){
    // buttonPlayer1.removeEventListener('click',clickPlayer1Button)
    // buttonPlayer2.removeEventListener('click',clickPlayer2Button)
    buttonPlayer1.disabled=true;
    buttonPlayer2.disabled=true;
    spanPlayer1.style.color="green"
    spanPlayer2.style.color="red"
   }
}
function clickPlayer2Button(){
  scoreplayer2++;
  spanPlayer2.textContent=scoreplayer2;
  if(scoreplayer2>=scoreToWin){
   // buttonPlayer1.removeEventListener('click',clickPlayer1Button)
   // buttonPlayer2.removeEventListener('click',clickPlayer2Button)
   buttonPlayer1.disabled=true;
   buttonPlayer2.disabled=true;
   spanPlayer2.style.color="green"
   spanPlayer1.style.color="red"
  }
}


buttonPlayer1.addEventListener('click',clickPlayer1Button)
buttonPlayer2.addEventListener('click',clickPlayer2Button)

 scoreToWinElement.addEventListener('change',()=>{
   scoreToWin = scoreToWinElement.value || 5;
 })



function reset (){
 //location.reload();
 scoreplayer1 = 0;
 scoreplayer2 = 0;

 spanPlayer1.textContent=0;
 spanPlayer2.textContent=0;

 spanPlayer2.style.color="black"
 spanPlayer1.style.color="black"

 buttonPlayer1.disabled=false;
 buttonPlayer2.disabled=false;
}


 resetButton.addEventListener('click',reset)

 document.body.addEventListener('copy',(e)=>{
  e.preventDefault();
  alert("Copy is not allowed")
 })