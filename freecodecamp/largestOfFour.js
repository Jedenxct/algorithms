
function largestOfFour(arr) {

    var arrOfMax = [];

    // loop through main array
    for(var i = 0; i < arr.length; i++) {

        var localMax = 0;

        for(var j = 0; j < arr[i].length; j++){

            if (arr[i][j] > localMax) {
                localMax = arr[i][j];
            }
        }
        arrOfMax.push(localMax);
    }
    console.log(arrOfMax);
    // You can do this!
    return arrOfMax;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
