let noBtnElement = document.getElementById("No-btn"); 
let yesBtnElement = document.getElementById("yes-btn");
let yesResponseElement = document.getElementById("yes-display")
let proposalImgElement = document.getElementById("proposalImg")
let acceptedImgElement = document.getElementById("acceptedImg")
let titleElement = document.getElementById("title")

let alreadyVisited = document.getElementById("already-visited") 
let newVisted = document.getElementById("new-visit")

let phrases = ["Are you sure ?", "Really sure", "Are you positive", "pookie please", "just think about it", "Don't be mean"]; 

let sizeIncrement=40;
let sizeDecrement=40;

noBtnElement.addEventListener("click",()=>{

    sizeIncrement+=20;
    sizeDecrement=sizeDecrement<10?10:sizeDecrement-4;

    let yesBtnSizeIncrement = sizeIncrement.toString() + "px"; 
    let noBtnSizeDecrement = sizeDecrement.toString() + "px"; 

    let phraseIndex = Math.floor(Math.random()*phrases.length); 

    yesBtnElement.style.fontSize=yesBtnSizeIncrement; 
    noBtnElement.style.fontSize=noBtnSizeDecrement; 

    noBtnElement.innerText = phrases[phraseIndex];


})

yesBtnElement.addEventListener("click",()=>{
    yesResponseElement.style.display="flex";
    noBtnElement.style.display = "none";
    yesBtnElement.style.display = "none";
    proposalImgElement.style.display="none"; 
    acceptedImgElement.style.display="flex";
    console.log(titleElement.innerText)
    titleElement.innerText=""
    localStorage.setItem("alreadyDone","true");
})


window.addEventListener("load",()=>{
    let alreadyDone = localStorage.alreadyDone; 
    if(alreadyDone==="true"){
        alreadyVisited.style.display="flex"; 
        newVisted.style.display="none";
    }
    
})