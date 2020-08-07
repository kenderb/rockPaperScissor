var computerPlay = () => {
    var value = {0: "Rock", 1: "Scissor", 2: "Paper"};
    return value[Math.floor(Math.random() * 3)];
};

var singleRPS = (playerSelection, computerSelection) => {
    var computerS = computerSelection.toLowerCase();
    var playerS = playerSelection.toLowerCase();
    if ((playerS == "rock" && computerS == "paper") ||
        (playerS == "scissor" && computerS == "rock") ||
        (playerS == "paper" && computerS == "scissor")) {
        alert ("You Lose! " + computerS + " beats " + playerS);
        return "You Lose! " + computerS + " beats " + playerS;
    } else if (playerS == computerS) {
        alert("is a tie");
        return "is a tie";
    } else {
        alert("you Win!");
        return "you Win!";
    }
};

var game = () => {
    var result = "";
    var scores = {win: 0, tie: 0, lose: 0 };
    for (let index = 0; index < 5; index++) {
        resul = singleRPS(prompt("Rock, Scissor or Paper?"), computerPlay());
        console.log(result);
        if(resul.includes("Lose!")) scores.lose++;
        if(resul.includes("tie")) scores.tie++;
        if(resul.includes("Win!")) scores.win++;
    }
    if (scores.win > scores.lose) {
        alert("You win!");
    } else if (scores.win < scores.lose) {
        alert("you lose! :(");
    } else {
        alert("No winners");
    }
    console.log("Final results: ");
    console.log("Win: " + scores.win + " Loses: " + scores.lose + " Ties: " + scores.tie);
};

game();