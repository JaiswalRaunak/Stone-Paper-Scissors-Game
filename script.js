let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const  userscore1=document.querySelector("#User-score");
const compscore1=document.querySelector("#comp-score");

const gencompchoice= () =>{
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame = () =>{
    msg.innerText="Game Was Draw.Play Again!!"
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscore1.innerText=userscore;
        msg.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscore1.innerText=compscore;
        msg.innerText=`You lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};

const playgame=(userchoice)=>{
    const compchoice = gencompchoice(); 
    if(userchoice === compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper" ? false : true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"? false: true;
        }else{
            userwin=compchoice==="rock"? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
