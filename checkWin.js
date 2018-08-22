function arrayContainsArray (superset, subset) {
    if (0 === subset.length) {
        return false;
    }
    return subset.every(function (value) {
        return (superset.indexOf(value) >= 0);
    });

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
            alert("Wins");
        }
    }
}
