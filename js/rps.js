/*

    N220 Section 25750
    Harmanjot Singh
    Rock Paper Scissors
    21 April 2020

*/

"use strict";

// object to store the controls
const controls = {
    // scoreboard
    scoreboardDiv: null,
    userScore: 0,
    computerScore: 0,
    ties: 0,
    // output divs
    parentDiv: null,
    outputBtnRock: null,
    outputBtnPaper: null,
    outputBtnScissor: null,
    resultOutputDiv: null
}

// main function
function main() {
    // heading
    document.body.innerHTML = "<h1>Rock Paper Scissors</h1>";

    // scoreboard
    scoreboard();

    // output divs
    createParentDiv();
    createBtnRock();
    createBtnPaper();
    createBtnScissor();

    // result output div
    resultOutput();

}

// create the second div
function scoreboard() {
    // create the div
    controls.scoreboardDiv = document.createElement("div");
    // width
    controls.scoreboardDiv.style.width = "350px";
    // height
    controls.scoreboardDiv.style.height = "60px";
    // scoreboard text
    controls.scoreboardDiv.innerHTML = "<p style='text-align:center; font-size: 20px;'> User: "+ controls.userScore + " Computer: " + controls.computerScore + " Ties: " + controls.ties +"</p>";
    // border 
    controls.scoreboardDiv.style.border = "2px solid black";
    // bottom margin
    controls.scoreboardDiv.style.marginBottom = "20px";
    // append it to the document body
    document.body.appendChild(controls.scoreboardDiv);
}

// create parent div function
function createParentDiv() {
    // create the div
    controls.parentDiv = document.createElement("div");
    controls.parentDiv.id = "parentid";
    document.body.appendChild(controls.parentDiv);
}

// create the rock button function
function createBtnRock() {
    // create the button
    controls.outputBtnRock = document.createElement("button");
    // give it an id
    controls.outputBtnRock.id = "rock";
    // font size
    controls.outputBtnRock.style.fontSize = "24px";
    // width
    controls.outputBtnRock.style.width = "100px";
    // height
    controls.outputBtnRock.style.height = "100px";
    // margin
    controls.outputBtnRock.style.margin = "10px";
    // position
    controls.outputBtnRock.style.position = "relative";
    // button text
    controls.outputBtnRock.innerHTML = "Rock";
    // add the event listner function
    controls.parentDiv.addEventListener("click", playGame);
    // append it to the document body
    controls.parentDiv.appendChild(controls.outputBtnRock);
}

// create the paper button function
function createBtnPaper() {
    // create the button
    controls.outputBtnPaper = document.createElement("button");
    // give it an id
    controls.outputBtnPaper.id = "paper";
    // font size
    controls.outputBtnPaper.style.fontSize = "24px";
    // width
    controls.outputBtnPaper.style.width = "100px";
    // height
    controls.outputBtnPaper.style.height = "100px";
    // margin
    controls.outputBtnPaper.style.margin = "10px";
    // position
    controls.outputBtnPaper.style.position = "relative";
    // button text
    controls.outputBtnPaper.innerHTML = "Paper";
    // add the event listner function
    controls.parentDiv.addEventListener("click", playGame);
    // append it to the document body
    controls.parentDiv.appendChild(controls.outputBtnPaper);
}

// create scissor button function
function createBtnScissor() {
    // create the button
    controls.outputBtnScissor = document.createElement("button");
    // give it an id
    controls.outputBtnScissor.id = "scissor";
    // font size
    controls.outputBtnScissor.style.fontSize = "24px";
    // width
    controls.outputBtnScissor.style.width = "100px";
    // height
    controls.outputBtnScissor.style.height = "100px";
    // margin
    controls.outputBtnScissor.style.margin = "10px";
    // position
    controls.outputBtnScissor.style.position = "relative";
    // button text
    controls.outputBtnScissor.innerHTML = "Scissor";
    // add the event listner function
    controls.parentDiv.addEventListener("click", playGame);
    // append it to the document body
    controls.parentDiv.appendChild(controls.outputBtnScissor);
}

// create the red heading
function resultOutput() {
    // create the div
    controls.resultOutputDiv = document.createElement("div");
    // margin
    controls.resultOutputDiv.style.margin = "10px";
    // height
    controls.resultOutputDiv.style.height = "30px";
    // Text
    controls.resultOutputDiv.innerHTML = "";
    // append it to the document body
    document.body.appendChild(controls.resultOutputDiv);
    
}

// play the game function
function playGame(e) {
    // generate a random number between 0 and 1
    let computerPick = Math.random() * 1;
    // initially set user guess to an empty string
    let userPick = "";

    if (e.target !== e.currentTarget) {
        // grab the id of the clicked item
        let clickedItem = e.target.id;

        // if user clicked the rock button
        if(clickedItem == "rock") {
            // set the user guess to rock then
            userPick = "Rock";
            // in this case computer picks rock
            if(computerPick >= 0 && computerPick <= 0.33) {
                // increment the counter
                controls.ties += 1;
                computerPick = "Rock";
                // scoreboard text
                controls.scoreboardDiv.innerHTML = "<p style='text-align:center; font-size: 20px;'> User: "+ controls.userScore + " Computer: " + controls.computerScore + " Ties: " + controls.ties +"</p>";
                controls.resultOutputDiv.innerHTML = "User chose " + userPick + ". Computer chose " + computerPick + ". It\'s\ a TIE!";
            } else if(computerPick >= 0.34 && computerPick <= 0.67) { // computer picks paper
                // increment the counter
                controls.computerScore += 1;
                computerPick = "Paper";
                // scoreboard text
                controls.scoreboardDiv.innerHTML = "<p style='text-align:center; font-size: 20px;'> User: "+ controls.userScore + " Computer: " + controls.computerScore + " Ties: " + controls.ties +"</p>";
                controls.resultOutputDiv.innerHTML = "User chose " + userPick + ". Computer chose " + computerPick + ". Computer WON!";
            } else { // computer picks scissor
                // increment the counter
                controls.userScore += 1;
                computerPick = "Scissor";
                // scoreboard text
                controls.scoreboardDiv.innerHTML = "<p style='text-align:center; font-size: 20px;'> User: "+ controls.userScore + " Computer: " + controls.computerScore + " Ties: " + controls.ties +"</p>";
                controls.resultOutputDiv.innerHTML = "User chose " + userPick + ". Computer chose " + computerPick + ". User WON!";
            }

        } else if(clickedItem == "paper") { // if user clicks the paper button
            // set the user guess to paper then
            userPick = "Paper";
            // computer picks rock
            if(computerPick >= 0 && computerPick <= 0.33) {
                // increment the counter
                controls.userScore += 1;
                computerPick = "Rock";
                // scoreboard text
                controls.scoreboardDiv.innerHTML = "<p style='text-align:center; font-size: 20px;'> User: "+ controls.userScore + " Computer: " + controls.computerScore + " Ties: " + controls.ties +"</p>";
                controls.resultOutputDiv.innerHTML = "User chose " + userPick + ". Computer chose " + computerPick + ". User WON!";
            } else if(computerPick >= 0.34 && computerPick <= 0.67) { // computer picks paper
                // increment the counter
                controls.ties += 1;
                computerPick = "Paper";
                // scoreboard text
                controls.scoreboardDiv.innerHTML = "<p style='text-align:center; font-size: 20px;'> User: "+ controls.userScore + " Computer: " + controls.computerScore + " Ties: " + controls.ties +"</p>";
                controls.resultOutputDiv.innerHTML = "User chose " + userPick + ". Computer chose " + computerPick + ". It\'s\ a TIE!";
            } else { // computer picks scissor
                // increment the counter
                controls.computerScore += 1;
                computerPick = "Scissor";
                // scoreboard text
                controls.scoreboardDiv.innerHTML = "<p style='text-align:center; font-size: 20px;'> User: "+ controls.userScore + " Computer: " + controls.computerScore + " Ties: " + controls.ties +"</p>";
                controls.resultOutputDiv.innerHTML = "User chose " + userPick + ". Computer chose " + computerPick + ". Computer WON!";
            }

        } else { // if clicks on the scissor button
            userPick = "Scissor";
            if(computerPick >= 0 && computerPick <= 0.33) { // computer picks rock
                // increment the counter
                controls.computerScore += 1;
                computerPick = "Rock";
                // scoreboard text
                controls.scoreboardDiv.innerHTML = "<p style='text-align:center; font-size: 20px;'> User: "+ controls.userScore + " Computer: " + controls.computerScore + " Ties: " + controls.ties +"</p>";
                controls.resultOutputDiv.innerHTML = "User chose " + userPick + ". Computer chose " + computerPick + ". Computer WON!";
            } else if(computerPick >= 0.34 && computerPick <= 0.67) { // computer picks paper
                // increment the counter
                controls.userScore += 1;
                computerPick = "Paper";
                // scoreboard text
                controls.scoreboardDiv.innerHTML = "<p style='text-align:center; font-size: 20px;'> User: "+ controls.userScore + " Computer: " + controls.computerScore + " Ties: " + controls.ties +"</p>";
                controls.resultOutputDiv.innerHTML = "User chose " + userPick + ". Computer chose " + computerPick + ". User WON!";
            } else { // computer picks scissor
                // increment the counter
                controls.ties += 1;
                computerPick = "Scissor";
                // scoreboard text
                controls.scoreboardDiv.innerHTML = "<p style='text-align:center; font-size: 20px;'> User: "+ controls.userScore + " Computer: " + controls.computerScore + " Ties: " + controls.ties +"</p>";
                controls.resultOutputDiv.innerHTML = "User chose " + userPick + ". Computer chose " + computerPick + ". It\'s\ a TIE!";
            }
        }
    }
    // stop any propagation of the same event
    e.stopPropagation();
}

