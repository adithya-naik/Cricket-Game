function generateComChoice() {
    let randomNumber = Math.random() * 3;
    // console.log(randomNumber);
    if (randomNumber >= 0 && randomNumber <= 1) return "Bat";
    else if (randomNumber > 1 && randomNumber <= 2) return "Ball";
    else return "Wicket";
  }






function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    // score.tie++;
    return "Its Tied";
  } else if (userChoice == "Bat" && computerChoice == "Ball") {
    // score.win++;
    return "User Won";
  } else if (userChoice == "Ball" && computerChoice == "Wicket") {
    // score.win++;
    return "User Won";
  } else if (userChoice == "Wicket" && computerChoice == "Bat") {
    // score.win++;
    return "User Won";
  } else {
    // score.lost++;
    return "Computer Won";
  }
}





function showResult(uchoice, cchoice, res) {
    // console.log(score);
    // localStorage.setItem("Score", JSON.stringify(score));
    alert(
      `You Chose ${uchoice}.\nComputer Chose ${cchoice}.\n${res}`
    //   `You Chose ${uchoice}.\nComputer Chose ${cchoice}.\n${res} \n${score.showScore()}`
    );
  }

  






// let text = document.querySelector(".text");
// let semi_final = localStorage.getItem("Score");
// let final = JSON.parse("Score");
// text.set;

// let strScore = localStorage.getItem("Score");
// let score;
// resetScore();






// function resetScore(strScore) {
//   score = strScore
//     ? JSON.parse(strScore)
//     : {
//         win: 0,
//         lost: 0,
//         tie: 0,
//       };
//   score.showScore = function () {
//     return `\nWon: ${score.win}\nLost: ${score.lost}\nTie: ${score.tie}`;
//   };
// }





