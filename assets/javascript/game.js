$(document).ready(function(){

    //variables
    let rock;
    let playerTotal;
    let opsNumber;
    let wins;
    let losses;

//if player goes over opsNumber, game ends
//on click of rock, add that number to playerTotal

//function to randomize opsNumber between 19-120
function randomNumber() {
   const random = Math.floor(Math.random() * (121 - 19) + 19);

   opsNumber = random + opsNumber;
   //prepend variable opsNumber to #op-score element with each click of #lottoButton
   $("#op-score").html("<h1>" + opsNumber + "</h1>");
  };


//function to reset game
function restartRocks(){
    alert("Game start!")
    wins = 0;
    losses = 0;
    playerTotal = 0;
    opsNumber = 0;
    randomNumber();

};

$(".reset").on("click", function () {
        restartRocks();
    });

restartRocks();//start game

})// end document