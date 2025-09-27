let box = document.querySelectorAll(".btn")
let reset = document.getElementById("reset")
let para = document.getElementById("para")
let player1 = true

const patterns = [
  [0, 1, 2], 
  [3, 4, 5],
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8],
  [0, 4, 8], 
  [2, 4, 6] 
];

box.forEach((boxes) => {
boxes.addEventListener("click" , ()=> {
   
    if (player1) {
        boxes.innerHTML="X"
        player1= false
    }
    else{
        boxes.innerHTML = "O"
player1=true
    }
    boxes.disabled = true
    winner()
})
})
const winner = () => {
  for (let pattern of patterns) {
    let pos1Val = box[pattern[0]].innerText;
    let pos2Val = box[pattern[1]].innerText;
    let pos3Val = box[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
       para.innerHTML = `🎉 Congratulations, Winner is  ${pos1Val}   🏆`
        return true;
      }
    }
  }
}
reset.addEventListener("click", function () {
  para.innerHTML = "";        
  player1 = true;               
  box.forEach(b => {
    b.innerHTML = "";           
    b.disabled = false;       
  });
});