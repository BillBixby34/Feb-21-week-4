$(document).ready(function(){

    //variables
    
    let playerTotal;
    let opsNumber;
    let wins;
    let losses;
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
     console.log(rockBtn.coral.name);
     console.log(rockBtn.coral.rockValue);
//if player goes over opsNumber, game ends
//on click of rock, add that number to playerTotal

//function to initialize/reset game
    function restartRocks(){
        //clear .rock-row div
        $("#rocks").empty();
        alert("Game start!")
        wins = "";
        losses = "";
        playerTotal = 0;
        opsNumber = "";
        //rockValue = [];
        isRockOn = false;
        //rocksMore = false;
        randomOps();
        //randomRocks();
    }; 
    //function to restart game, keep win/loss
    function replayRocks(){
      $("#rocks").empty();
      alert("Game start!")
      playerTotal = 0;
      opsNumber = "";
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
      losses
      restartRocks();
    }
    else if (playerTotal == opsNumber){

    }
  }
    
 
//rock button functionality
$("#coral").on("click", function(){
    //add rock value to player score
    playerTotal = playerTotal + rockBtn.coral.rockValue;
    console.log(rockBtn.coral.rockValue + " is value of coral")
  });
$("#metamorphic").on("click", function(){
      playerTotal = playerTotal + rockBtn.metamorphic.rockValue;
      console.log("meta button pressed");
      console.log("playerTotal = " + playerTotal);
      console.log(rockBtn.metamorphic.rockValue + " is value of meta")
  });
$("#igneous").on("click", function(){
        playerTotal = playerTotal + rockBtn.igneous.rockValue;
        console.log("igneous button pressed");
        console.log("playerTotal = " + playerTotal);
        console.log(rockBtn.igneous.rockValue + " is value of igneous")
  });
$("#sedimentary").on("click", function(){
          playerTotal = playerTotal + rockBtn.sedimentary.rockValue;
          console.log("sed button pressed");
          console.log("playerTotal = " + playerTotal);
          console.log(rockBtn.sedimentary.rockValue + " is value of sed")
  });
    
  




$(".reset").on("click", function () {
        replayRocks();
    });

restartRocks();//start game

});// end document