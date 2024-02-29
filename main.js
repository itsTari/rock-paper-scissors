const rulebtn = document.querySelector('.rule-btn');
const close = document.querySelector('.close');
let rulesBanner = document.querySelector('.rules-banner');
let btn = document.querySelector('.play-again');
const rock=document.getElementById("roc")
const sci=document.getElementById("sci")
const paper=document.getElementById("pap")
const playerChoice = document.querySelector('.player-pick');  
const computerPick = document.querySelector('.computer-pick');
let startGame = document.querySelector('.start-game');
let options = document.getElementsByClassName('computer');
let introScreen = document.querySelector('.display');
let player=document.getElementsByClassName("players");





   rulebtn.addEventListener('click', () =>{
        rulesBanner.style.display ='flex';
   });
   close.addEventListener('click', () =>{
        rulesBanner.style.display = 'none'
   });

//    functionality of the game 

let playerOption="";
const computerOptions = ['rock', 'paper', 'scissors'];
let computerChoice= "";
     function choice(){
          introScreen.style.display="none"
          startGame.style.display="flex"
          const computerNum = Math.floor(Math.random() * 3);
          computerChoice = computerOptions[computerNum];
          
          if(playerOption=="rock")  {
            player[0].style.display="block"
          }
          if(playerOption=="paper"){
               player[1].style.display="block"
          }
          if(playerOption=="scissors"){
               player[2].style.display="block"

          }
          if(computerChoice=="rock"){
               options[0].style.display="block"
          }
          if(computerChoice=="paper"){
               options[1].style.display="block"
               
          } if(computerChoice=="scissors"){
               options[2].style.display="block"
               
          }

     }
    
const playMatch = () => {
     
    
//     startGame.style.display="none"
     
     // for(i = 0; i < options.length; i++){
     //      options[i].addEventListener('click', function(e) {
     //           // e.preventDefault()
               
     //           introScreen.style.display="none"
     //           startGame.style.display="flex"

              

     //           const computerNum = Math.floor(Math.random() * 3);
     //           const computerChoice = computerOptions[computerNum];
     //           console.log(computerChoice);
     //           console.log(playerOption)

               
     //           // updating the images
     //           playerChoice.append(e.target);
     //           // if(e === 'rock'){
     //           //      console.log('you clicked rock');
     //           // }
               
     //           // console.log(this)

     //           let i = new Image();
     //           i.src = `./images/icon-${computerChoice}.svg`;
     //           i.classList.add('images');
               
     //           computerPick.appendChild(i);
     //           if(computerChoice === 'rock'){
     //                i.classList.add('red');
     //           }else if (computerChoice === 'paper'){
     //                i.classList.add('blue');
     //           }else if (computerChoice === 'scissors'){
     //                i.classList.add('yellow');
     //           }

     //           // compareHands();
              
            
     //      compareHands();
          
     //      });
     // };
     const compareHands = () => {
          const text = document.querySelector('.report-text');
          // btn.style.display ='none'
          
          if(playerOption === computerChoice){
               text.innerText = 'you draw';
               btn.style.color = 'hsl(215, 47%, 19%)'
               return;  
          }
          if(playerOption === 'rock'){
               if(computerChoice === 'scissors'){
                    text.innerText = 'you win';
                    btn.style.color = 'hsl(215, 47%, 19%)';
                    score++;
                    updateScore();
                    return; 
               }else{
                    text.innerText = 'you lose';
                    btn.style.color = 'red'
                    score--;
                    updateScore();
                    return;
               }
          }
          // check for paper
          if(playerOption === 'paper'){
               if(computerChoice === 'rock'){
                    text.innerText = 'you win'; 
                    btn.style.color = 'hsl(215, 47%, 19%)';

                    score++;
                    updateScore();
                    return; 
               }else{
                    text.innerText = 'you lose';
                    btn.style.color = 'red'
                    score--;
                    updateScore();
                    return;
               }
          }
          // for scissors
          if(playerOption === 'scissors'){
               if(computerChoice === 'paper'){
                    text.innerText = 'you win';
                    btn.style.color = 'hsl(215, 47%, 19%)';
                    score++;
                    updateScore(); 
                    return; 
               }else{
                    text.innerText = 'you lose';
                    btn.style.color = 'red'
                    score--;
                    updateScore();
                    return;
               }
          }

     };
     let score = 0;
     const updateScore = () =>{
          setTimeout(() =>{
               let pscore = document.querySelector('.score-num');
               pscore.textContent = score;
          },2000);
     }
     
     rock.addEventListener("click", ()=>{

          playerOption="rock"
          choice();
          
          compareHands();   
             
         })
     sci.addEventListener("click", ()=>{
          playerOption="scissors"
          choice();
          
          compareHands();   
         })
     paper.addEventListener("click", ()=>{
          playerOption="paper"
          choice();
          
          compareHands();   
         }) 
     
     
     btn.addEventListener('click', function () {
               btn.style.cursor = 'pointer';
               introScreen.style.display="flex"
               startGame.style.display="none"
               for (i=0; i<3;i++){
                    player[i].style.display="none"
                    options[i].style.display="none"

               }
     });  
   
};
playMatch()



