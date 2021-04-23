$(document).ready(function(){

    //variables
    let rocks = ["coral", "sedimentary", "metamorphic", "igneous"];
    let playerTotal;
    let opsNumber = "";
    let wins;
    let losses;
    let rockValue = [];//will hold value to be placed in each rock button
    isRockOn = false;

//if player goes over opsNumber, game ends
//on click of rock, add that number to playerTotal

//function to randomize values
function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min) + min);

   //opsNumber = randomNumber(19, 121);
  // opsNumber = random + opsNumber;
   //prepend variable opsNumber to #op-score element with each click of #lottoButton
   //$("#op-score").html("<h1>" + opsNumber + "</h1>");
  };

    


    function randomOps(){
       // randomNumber(19, 121);
        let random = randomNumber(19, 121);
        opsNumber = random + opsNumber;

      $("#op-score").html("<h1>" + opsNumber + "</h1>");
      //console.log(randomOps())
    };

    //MAY ATTEMPT TO LOOP IF FOREACH DOESNT WORKOUT

     
 //}

  //randomly generate number for each rock between 1-12
  function randomRocks(){
      //rocks.forEach(() => {
        //  rockValue = randomNumber(1, 13);
       //  console.log(rockValue);
          //
        //});
     for (let i = 0; i < rocks.length; i++) {
     const rockBtn = $("<button>");
     rockBtn.addClass("col-md-3 btn" );
     rockBtn.attr("rock-type", rocks[i]);
     rockBtn.text(rocks[i]);
     //append each "rockBtn" to the ".rock-row" div (provided).
     $(".rock-row").append(rockBtn);
    }
  }
  //set array with length of 3, to iterate over function until <4

  //make operator variable binary
  //should turn on once rock button is pressed
  //from there will add the Rock Value assigned to each rock

//rock button functionality
$( ".rock" ).on("click", function() {
    isRockOn = true;
    alert( "Rock time!" );
    addCrystal();//function to addto players total
    alert("You're total is " + playerTotal + "!")

});

//function to reset game
function restartRocks(){
    alert("Game start!")
    wins = 0;
    losses = 0;
    playerTotal = 0;
    opsNumber = 0;
    randomOps();
    randomRocks();
};

$(".reset").on("click", function () {
        restartRocks();
    });

restartRocks();//start game

})// end document