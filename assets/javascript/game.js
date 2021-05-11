$(document).ready(function(){

    //variables
    
    let playerTotal;
    let opsNumber;
    let winCounter;
    let lossCounter;
    let rockValue;//will hold value to be placed in each rock button
    let isRockOn;//binary to hold win-loss values, NOT reset
    //let rocksMore;//if player score is greater than opponent
    //let rocks = ["coral", "sedimentary", "metamorphic", "igneous"];
    if (isRockOn) {
      aler
    }
     let rockBtn = {
      coral:
      {
        name: "coral",
        img: "src=assets/images/coral.png",
        rockValue: randomNumber(1,13)
      },
      metamorphic:
      {
        name: "metamorphic",
        img: "src=assets/images/metamorphic.png",
        rockValue: randomNumber(1,13)
      },
      sedimentary:
      {
        name: "sedimentary",
        img: "src=assets/images/sedimentary.png",
        rockValue: randomNumber(1,13)
      },
      igneous:
      {
        name: "igneous",
        img: "src=assets/images/igneous.png",
        rockValue: randomNumber(1,13)
      }
     };
//if player goes over opsNumber, game ends
//on click of rock, add that number to playerTotal

//function to initialize/reset game
    function restartRocks(){
        //clear .rock-row div
        $("#rocks").empty();
        alert("Game start!")
        winCounter = "";
        lossCounter = "";
        playerTotal = 0;
        opsNumber = 0;
        randomOps();
        //set rockValue with randomNumber function
        rockBtn.coral.rockValue = randomNumber(1,13)
        rockBtn.sedimentary.rockValue = randomNumber(1,13)
        rockBtn.metamorphic.rockValue = randomNumber(1,13)
        rockBtn.igneous.rockValue = randomNumber(1,13)
        isRockOn = false;
    }; 
    //function to restart game, keep win/loss
    function replayRocks(){
      $("#rocks").empty();
      alert("Game start!")
      playerTotal = 0;
      $("#player-score").html(playerTotal);
      opsNumber = 0;
      randomOps();
    }
//function to randomize values
function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min) + min);

  };
  //set opponent number
    function randomOps(){
        let random = randomNumber(19, 121);
        opsNumber = random + opsNumber;
      $("#op-score").html("<h1>" + opsNumber + "</h1>");
    };
   
  //function to check if game is over
  function endGame(){
    if (playerTotal > opsNumber){
      alert("You lost");
      lossCounter++
      $("#losses").html("<h2>" + lossCounter + "</h2>");
      replayRocks();
    }
    else if (playerTotal === opsNumber){
      alert("You won!");
      winCounter++
      $("#wins").html("<h2>" + winCounter + "</h2>");
      replayRocks();
    }
  }
    
 
//rock button functionality
$("#coral").on("click", function(){
    playerTotal = playerTotal + rockBtn.coral.rockValue;
    $("#player-score").html(playerTotal);
    endGame();
  });
$("#metamorphic").on("click", function(){
      playerTotal = playerTotal + rockBtn.metamorphic.rockValue;
      $("#player-score").html(playerTotal);
      endGame();
  });
$("#igneous").on("click", function(){
        playerTotal = playerTotal + rockBtn.igneous.rockValue;
        $("#player-score").html(playerTotal);
        endGame();
  });
$("#sedimentary").on("click", function(){
          playerTotal = playerTotal + rockBtn.sedimentary.rockValue;
          $("#player-score").html(playerTotal);
          endGame();
  });
    
  //want clicked rocks to update user score on click
  //could put endgame() on each rock button




$(".reset").on("click", function () {
        replayRocks();
    });

restartRocks();//start game

});// end document