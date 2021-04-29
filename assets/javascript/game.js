$(document).ready(function(){

    //variables
    let rockBtn;
    let playerTotal;
    let opsNumber;
    let wins;
    let losses;
    let rockValue = [];//will hold value to be placed in each rock button
    let isRockOn;//will hold win-loss values, NOT reset
    //let rocksMore;//if player score is greater than opponent
    let rocks = ["coral", "sedimentary", "metamorphic", "igneous"];
    

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
        //randomRocks();
    }; 
//function to randomize values
function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min) + min);

  };
  //set opponents number
    function randomOps(){
        let random = randomNumber(19, 121);
        opsNumber = random + opsNumber;

      $("#op-score").html("<h1>" + opsNumber + "</h1>");
    };

    //redo function randomRocks()
    function randomRock(){
        let randomRock = randomNumber(1, 13);
    }

  //randomly generate number for each rock between 1-12
  //function randomRocks(){
        
    for (let i = 0; i < rocks.length; i++) {
       
       rockBtn = $("<img>");
       rockValue[i] = randomNumber(1, 13);
       rockBtn.attr('src', "assets/images/" + rocks[i] + ".png");//displays rock image
       rockBtn.attr('rock-name', rocks[i]);
       rockBtn.addClass(" col-sm-3 btn rocks" )
       rockBtn.attr('value', rockValue[i] )
       $(".rock-row").append(rockBtn);//when indexed, only shows 1st
       //.attr("rock-type", rocks[i]);
       //give each rockBtn an attr 'value' equal to rockValue
       
       
       console.log("The value of the " + rocks[i] + " is " + rockValue[i] + "!")
       //append each "rockBtn" to the ".rock-row" div (provided).
      
       //$(".rock-btn").on("click", function(){
          // console.log("The value of the " + rocks[i] + " is " + rockValue[i] + "!")//when click event inside loop, click is recognized
       //})
    }
 //}
   //.rock is NOT registering clicks on image.  
  //should turn on once rock button is pressed
  //from there will add the Rock Value assigned to each rock

//rock button functionality
$(".rocks").on("click", function(){
    //add rock value to player score
    //playerTotal = playerTotal + this.value;//define this.value??
    //console.log("player has " + playerTotal + " points")
    //isRockOn = true;
    console.log("The value of " + rockBtn.attr('rock-name') + ' is ' +  rockBtn.attr('value') + "!")
    //addCrystal();//function to addto players total
    //alert("You're total is " + playerTotal + "!")

})



$(".reset").on("click", function () {
        restartRocks();
    });

restartRocks();//start game

})// end document