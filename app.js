
//ACCESSING ELEMENST OF GAME
let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let reset_btn= document.querySelector("#reset-game");
let isgameactive=true;
//GENRATE COMPUTER CHOICES 
const gencompchoice=()=>{
  const options=["rock","paper","scissors"];
const randomIdx= Math.floor(Math.random()*3);
return options[randomIdx] 
}

//FUNCTION FOR DRAW GAME
const drawgame=()=>{
    console.log("Game Was Draw.")
    msg.innerText= "Well played! But it's a tie! ⚖️";
    msg.style.backgroundColor="rgb(1, 1, 34)";
}

//SHOW WINNER AND UPDATE SCORE
const showWinner=(userwin,userchoice,compchoice)=>{
   if(userwin){
    userScore++;
  userScorePara.innerText=userScore;
    msg.innerText=`You Win!🎉🏆🥳 Your ${userchoice} beats ${compchoice}`
    msg.style.backgroundColor="green";
   }
   else{
   compScore++;
   compscorepara.innerText= compScore;
      msg.innerText=`Oops! The computer wins! 🤖🏆 Computer ${compchoice} beats your ${userchoice}`
      msg.style.backgroundColor="red";
   }
}

//GAME PLAY LOGIC
const playgame=(userchoice)=>{
   const compchoice=gencompchoice();
   if(userchoice === compchoice){
      drawgame();
   }
   else{
    let userwin= true;
    if(userchoice==("rock")){
      userwin =  compchoice ==="paper" ? false:true;
    }
    else if(userchoice==="paper"){
        userwin =  compchoice ==="scissors" ? false:true;
    }
    else{
        userwin =  compchoice ==="rock" ? false:true;
    }
    showWinner(userwin,userchoice,compchoice);
   }
}

//USER MOVES AND GET ALL THE ID OF CHOICE DIVS 
choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})

//RESET GAME
reset_btn.addEventListener("click",()=>{
  isgameactive=true;
  userScore=0;
  compScore=0;
  userScorePara.innerText=userScore;
  compscorepara.innerText=compScore;
  msg.style.backgroundColor="red";
  msg.innerText="Game Restarted! Choose Rock, Paper, or Scissors!";
  
  msg.classList.remove("blink");
  void msg.offsetWidth; // Trigger reflow to restart animation
  msg.classList.add("blink");
})
