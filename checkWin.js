function arrayContainsArray (superset, subset) {
    if (0 === subset.length) {
        return false;
    }
    return subset.every(function (value) {
        return (superset.indexOf(value) >= 0);
    });

}

function disableButtons(){
    var tiles = document.getElementsByClassName("tile")

    for (var i = 0; i < tiles.length; i++) {
        tiles[i].removeEventListener("click", changeTile)
    }
}
////////horizontal
var winCombo1 =["0","1","2"];
var winCombo2 = ["3","4","5"];
var winCombo3 = ["6","7","8"];

////////vertical
var winCombo4 = ["0","3","6"];
var winCombo5 = ["1","4","7"];
var winCombo6 = ["2","5","8"];

////////////Diagonal
var winCombo7 = ["0","4","8"];
var winCombo8 = ["6","4","2"];

var Combos = [winCombo1, winCombo2, winCombo3, winCombo4,
    winCombo5, winCombo6, winCombo7, winCombo8];

function checkWin(playerAnswers){
    for (var x = 0; x < Combos.length; x++){    //Iterate through Combos
        if(arrayContainsArray(playerAnswers,Combos[x])){

            setTimeout(function () {
                if(color === "Red"){
                    color = "Blue";
                }else{
                    color = "Red"
                }
                winner.innerText = color + " Wins!";
                window.alert= function () {}
            },50)
            console.log("Here")


        }else if(xArray.length + oArray.length === 9 ){

            setTimeout(function () {
                alert("CAT");
                window.alert= function () {}
            },200)
            console.log("Here1")
        }

    }

}



