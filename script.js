const allBtn =document.querySelectorAll(".box");
const container =document.querySelector(".container");
const game =document.querySelector(".game");
const resetbtn=document.querySelector(".reset");
const new_Game= document.querySelector(".new_game");
const msg =document.querySelector(".msg_container p strong");
const winnerBox= document.querySelector(".msg_container");
const restartButton =document.querySelector("drowmsg");
// console.log(msg.innerText);
// winnerBox.classList.remove("msgnew")
// console.log(winnerBox)

console.log(resetbtn);
// console.log(allBtn);
// console.log(container);
// console.log(game);

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let click=0;

const enableBox =()=>{
  for(let box of allBtn){
    box.disabled =false;
  }
}

const resetGame =()=>{
  click = 0;
  enableBox();
  winnerBox.classList.add("msgnew");
}
const resetbutton =()=>{
  click=0;
  enableBox();
  winnerBox.classList.add("msgnew");
}


allBtn.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(click %2 == 0){
        box.innerHTML="x";
        click++;
        // console.log(click);
      }
      else{
        box.innerHTML="o";
        click++;
        // console.log(click);
      }
      box.disabled=true;
      checkWinner();  
    });
} );


const disableBox =()=>{
  for(let box of allBtn){
    box.disabled =true;
    box.innerText="";
  }
}

const showWinner =( winner)=>{
  msg.innerText=`Congratulation , Winner is ${winner} `;
  winnerBox.classList.remove("msgnew");
  disableBox();
}


const checkWinner =()=>{
    for( patten of winPatterns){
       let pos1Val =allBtn[patten[0]].innerText;
       let pos2Val =allBtn[patten[1]].innerText;
       let pos3Val =allBtn[patten[2]].innerText;
       if(pos1Val != ""&& pos2Val != ""&& pos3Val!= ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
          console.log("winner",pos1Val);
          showWinner(pos1Val);
        }  
       }
       
    }
}


new_Game.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetbutton);