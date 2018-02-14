
function repeatStringNumTimes(str, num) {

    var toReturn = "";

    for (var i = 0; i < num; i++) {
        toReturn += str;
    }

    return toReturn;
}

repeatStringNumTimes("abc", 3);
