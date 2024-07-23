var USERSCORE=document.querySelector("#user")
var COMPSCORE=document.querySelector("#comp")
var ROCK=document.querySelector("#r")
var PAPER=document.querySelector("#p")
var SCISSORS=document.querySelector("#s")
var RESULT=document.querySelector(".result")
var usescore=0
var comscore=0
function game(choice){
    let compChoice=Math.floor(Math.random()*3)
    switch(choice){
        case 0:
            if(compChoice===2){
                usescore+=1;
                RESULT.innerHTML="rock brakes scissors , user wins!"
                USERSCORE.innerHTML=`${usescore}`;
                ROCK.classList.remove("choice")
                ROCK.classList.add("win")
                setTimeout(()=>{
                    ROCK.classList.add("choice")
                    ROCK.classList.remove("win")
                },1000)
            }
            else if(compChoice===1){
                comscore+=1
                RESULT.innerHTML="paper covers rock,computer wins!"
                COMPSCORE.innerHTML=`${comscore}`
                ROCK.classList.remove("choice")
                ROCK.classList.add("lose")
                setTimeout(()=>{
                    ROCK.classList.add("choice")
                    ROCK.classList.remove("lose")
                },1000)
            }
            else{
                RESULT.innerHTML="it's a draw!"
            }
            break
        case 1:
            if(compChoice===0){
                usescore+=1;
                RESULT.innerHTML="paper covers rock,user wins!"
                USERSCORE.innerHTML=`${usescore}`
                PAPER.classList.remove("choice")
                PAPER.classList.add("win")
                setTimeout(()=>{
                    PAPER.classList.add("choice")
                    PAPER.classList.remove("win")
                },1000)
            }
            else if(compChoice===2){
                comscore+=1
                RESULT.innerHTML="scissors cuts paper,computer wins!"
                COMPSCORE.innerHTML=`${comscore}`
                PAPER.classList.remove("choice")
                PAPER.classList.add("lose")
                setTimeout(()=>{
                    PAPER.classList.add("choice")
                    PAPER.classList.remove("lose")
                },1000)
            }
            else{
                RESULT.innerHTML="it's a draw!"
            }
            break
        case 2:
            if(compChoice===1){
                usescore+=1;
                RESULT.innerHTML="scissors cuts paper,user wins!"
                USERSCORE.innerHTML=`${usescore}`
                SCISSORS.classList.remove("choice")
                SCISSORS.classList.add("win")
                setTimeout(()=>{
                    SCISSORS.classList.add("choice")
                    SCISSORS.classList.remove("win")
                },1000)
            }
            else if(compChoice===0){
                comscore+=1
                RESULT.innerHTML="rock breaks scissors,computer wins!"
                COMPSCORE.innerHTML=`${comscore}`
                SCISSORS.classList.remove("choice")
                SCISSORS.classList.add("lose")
                setTimeout(()=>{
                    SCISSORS.classList.add("choice")
                    SCISSORS.classList.remove("lose")
                },1000)
            }
            else{
                RESULT.innerHTML="it's a draw!"
            }
            break  
    }
}
ROCK.addEventListener('click',()=>{
    game(0)}
);
PAPER.addEventListener('click',()=>{
    game(1)}
);
SCISSORS.addEventListener('click',()=>{
    game(2)}
);