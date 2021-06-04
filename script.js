let wins=0;
let losses=0;
let guessesLeft=10;
let keyPress=[];
window.onkeypress=(e)=>{
    addUserKey(e.key.toLowerCase());
    return;
}
let compGuess=String.fromCharCode(
    Math.round(Math.random()*26)+97
);
let addUserKey=(key)=>{
    let repeat=keyPress.indexOf(key);
    if(repeat+1){
        alert(key+" already used.Try again 😰😰😰");
    }else{
        keyPress.push(key);
        document.querySelector("#playersGuess").innerHTML=keyPress.join(" - ");
        pointGuess(key);
    }
}
let pointGuess=(key)=>{
    if(key===compGuess){
        alert("You're real PSYCHIC MAN 🔥🔥🔥");
        document.querySelector("#numWins").innerHTML=++wins;
        reset();
    }else if(guessesLeft===0){
        alert("Nice try man.Let's over start");
        document.querySelector("#numLosses").innerHTML=++losses;
        reset();
    }else{
        document.querySelector("#numGuesses").innerHTML=--guessesLeft;
    }
}
let reset=()=>{
    guessesLeft=10;
    keyPress=[];
}


