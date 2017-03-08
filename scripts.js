var generateComputerChoice = function() {

    var rps = ["rock", "paper", "scissors"];
    var random = Math.floor(Math.random() * 2)
    var AI_choice = rps[random];
    return AI_choice;
};

var pickWinner = function(userchoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    if (userChoice === computerChoice) {
        console.log("draw");
    }
    else if (userChoice === "rock" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper") {
        console.log('user wins')
    }
    else {
        console.log('AI wins');
    }
}
