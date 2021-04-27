$(document).ready(function(){

    //variables
    let rocks = ["coral", "sedimentary", "metamorphic", "igneous"];
    let rock;
    let playerTotal;
    let opsNumber = "";
    let wins;
    let losses;
    let rockValue;//will hold value to be placed in each rock button
    let isRockOn;//will hold win-loss values, NOT reset
    let rocksMore;//if player score is greater than opponent

//if player goes over opsNumber, game ends
//on click of rock, add that number to playerTotal

//function to initialize/reset game
    function restartRocks(){
        //clear .rock-row div
        $("#rocks").empty();
        alert("Game start!")
        wins = "";
        losses = "";
        playerTotal = "";
        opsNumber = "";
        rockValue = [];
        isRockOn = false;
        rocksMore = false;
        randomOps();
        randomRocks();
    }; 
//function to randomize values
function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min) + min);

  };

    function randomOps(){
        let random = randomNumber(19, 121);
        opsNumber = random + opsNumber;

      $("#op-score").html("<h1>" + opsNumber + "</h1>");
      //console.log(randomOps())
    };

  //randomly generate number for each rock between 1-12
  function randomRocks(){
      
     for (let i = 0; i < rocks.length; i++) {
        
        const rockBtn = $("<img>");
        rockBtn.attr('src', "assets/images/" + rocks[i] + ".png");//displays rock image
        rockBtn.addClass(" col-sm-3 btn rock-btn" )
        //.attr("rock-type", rocks[i]);
        //give each rockBtn an attr 'value' equal to rockValue
        rockValue[i] = randomNumber(1, 13);
        rockBtn.attr('value', rockValue[i] )
        console.log("The value of the " + rocks[i] + " is " + rockValue[i] + "!")
        //append each "rockBtn" to the ".rock-row" div (provided).
        $("#rocks").append(rockBtn);//when indexed, only shows 1st
     }
  }
   //.rock is NOT registering clicks on image.  
  //should turn on once rock button is pressed
  //from there will add the Rock Value assigned to each rock

//rock button functionality
$(".rock-btn").on("click", function(){
    //add rock value to player score
    //playerTotal = playerTotal + this.value;//define this.value??
    //console.log("player has " + playerTotal + " points")
    //isRockOn = true;
    console.log( "Rock time!" );
    //addCrystal();//function to addto players total
    //alert("You're total is " + playerTotal + "!")

})



$(".reset").on("click", function () {
        restartRocks();
    });

restartRocks();//start game

})// end document