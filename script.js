


let gameSeq=[];
let userSeq=[];

let started = false;
let level=0 ; 

let btns=['red','orange','green','purple'];

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Start");
        started=true;
        levelUp();
    }
    
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

};
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);

};

function levelUp (){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //random  generate

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

    setTimeout(checkAns , level*1000+1000);
    // setTimeout(checkAns);
 
};

function checkAns(idx){
    // console.log("current level :" , level);
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
        }    
    } else {
        h2.innerHTML=`Game Over ! your score was <b> ${level} </b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150);
        setTimeout(reset,1000);
        reset();
    }

}


function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkAns(userSeq.length-1);

};

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener('click',btnPress); 
};

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}


// let gameSeq = [];
// let userSeq = [];
// let started = false;
// let level = 0;
// const btns = ['red', 'orange', 'green', 'purple'];
// const h2 = document.querySelector("h2");

// document.addEventListener("keypress", function () {
//     if (!started) {
//         console.log("Game Start");
//         started = true;
//         levelUp();
//     }
// });

// function gameFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(() => btn.classList.remove("flash"), 250);
// }

// function userFlash(btn) {
//     btn.classList.add("userFlash");
//     setTimeout(() => btn.classList.remove("userFlash"), 250);
// }

// function levelUp() {
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;

//     let randIdx = Math.floor(Math.random() * 4);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     gameFlash(randBtn);

//     setTimeout(checkAns, level * 1000 + 1000);
// }

// function checkAns() {
//     if (userSeq.join("") === gameSeq.join("")) {
//         if (userSeq.length === gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         h2.innerHTML = `Game Over! Your score was <b>${level}</b>.<br>Press any key to start`;
//         document.body.style.backgroundColor = "red";
//         setTimeout(() => document.body.style.backgroundColor = "white", 150);
//         reset();
//     }
// }

// function btnPress() {
//     let btn = this;
//     userFlash(btn);
//     userSeq.push(btn.id);
//     checkAns();
// }

// document.querySelectorAll(".btn").forEach(btn => btn.addEventListener('click', btnPress));

// function reset() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }
