let gameSeq = [];
let userSeq = [];

let btns = ['pink','orange','lightblue','blue'];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    // console.log("game started level 1");
    if(started == false ){
        levelUp();
        // console.log("game is started");
        started = true;
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}
function userFlash(btn){
    btn.classList.add("user-flash");
    setTimeout(function(){
        btn.classList.remove("user-flash");
    },250)
}



function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `game is started Level:${level}`;
    //random btn to choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);

    gameFlash(randbtn);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);

    gameSeq.push(randColor);
    // console.log(gameSeq);
}

function checkAns(idx){
    // console.log("current level:",level);

    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same value")
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000);
        
        }
    }else {
        // console.log(`game over! press any key to start`);
        h2.innerHTML = `game over! your score is <b> ${level} </b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";

        },150)
        reset();

        
    }

}

function btnpress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
}


let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}