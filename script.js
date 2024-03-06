let noBtnElement = document.getElementById("No-btn"); 
let yesBtnElement = document.getElementById("yes-btn");
let yesResponseElement = document.getElementById("yes-display")
let proposalImgElement = document.getElementById("proposalImg")
let acceptedImgElement = document.getElementById("acceptedImg")
let titleElement = document.getElementById("title")
let rejectedResponseElement = document.getElementById("rejected")

let alreadyVisited = document.getElementById("already-visited") 
let newVisted = document.getElementById("new-visit")

let phrases = ["Are you sure ?", "Really sure", "Are you positive", "pookie please", "just think about it", "Don't be mean"]; 

let sizeIncrement=40;
let sizeDecrement=40;
let noOfTimeAsked=0; 
let userResponse="false"; 

function noResponseHandler(){
    sizeIncrement+=20;
    sizeDecrement=sizeDecrement<10?10:sizeDecrement-4;

    let yesBtnSizeIncrement = sizeIncrement.toString() + "px"; 
    let noBtnSizeDecrement = sizeDecrement.toString() + "px"; 

    let phraseIndex = Math.floor(Math.random()*phrases.length); 

    yesBtnElement.style.fontSize=yesBtnSizeIncrement; 
    noBtnElement.style.fontSize=noBtnSizeDecrement; 

    noBtnElement.innerText = phrases[phraseIndex];
}

noBtnElement.addEventListener("click",()=>{

    if(noOfTimeAsked>9){
        newVisted.style.display="none";
        rejectedResponseElement.style.display="flex"; 
        localStorage.setItem("userResponse","false");
    }
    else{
        noResponseHandler(); 
        noOfTimeAsked+=1; 
    }

})

yesBtnElement.addEventListener("click",()=>{
    yesResponseElement.style.display="flex";
    noBtnElement.style.display = "none";
    yesBtnElement.style.display = "none";
    proposalImgElement.style.display="none"; 
    acceptedImgElement.style.display="flex";
    console.log(titleElement.innerText)
    titleElement.innerText=""
    localStorage.setItem("userResponse","true");
})


window.addEventListener("load",()=>{
    let userResponse = localStorage?.userResponse; 
    if(userResponse==="true"){
        alreadyVisited.style.display="flex"; 
        newVisted.style.display="none";
        rejectedResponseElement.style.display="none"; 
    }
    else if (userResponse==="false"){
        alreadyVisited.style.display="none"; 
        newVisted.style.display="flex";
        rejectedResponseElement.style.display="none";  
        sizeDecrement=40;
        sizeIncrement=40;
        noOfTimeAsked=0; 
    }
    
})
