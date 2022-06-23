// find the highest tower in the city

var towerArr = [4,21,15,18, 27, 58, 33, 21, 45, 12];

function getHighestTower(towers) {
    var maxHight=0;

    for(i=0; i<towerArr.length; i++){
        if(towerArr[i]> maxHight){
            maxHight=towerArr[i];


        }
    }


console.log("max hight of tower:", maxHight);
}

getHighestTower(towerArr);