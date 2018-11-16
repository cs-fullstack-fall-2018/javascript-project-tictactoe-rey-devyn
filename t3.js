var color = "Red";
var nowPlayer = "x";
var xArray = [];
var oArray = [];
var classname = document.getElementsByClassName("tile");
var winner = document.getElementById("winner");
function switchPlayerTurn() {
    if(nowPlayer === "x"){
        nowPlayer = "o";
        console.log(nowPlayer)
        color = "Blue"
    }else{
        nowPlayer = "x";
        console.log(nowPlayer)
        color = "Red"
    }

}
// Setup your Variables


var changeTile = function() {
    if(this.id !== "x" && this.id !== "o") {

        this.style.backgroundColor = color;
        if(nowPlayer === "x"){
            xArray.push(this.id)
        }else{
            oArray.push(this.id)
        }
        this.id = nowPlayer;

        switchPlayerTurn();
        checkWin(xArray);
        checkWin(oArray);

    }


};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', changeTile, false);

}
// Setup your Variables


for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', changeTile, false);
}








// Handle Restart game button

// Grab all the play spaces in the board

// Clear all the play spaces in the board

// Setup click handlers for each play space on the board

// Handle a play space being clicked

// Switch player turn

// Check for winner or CAT/tie



