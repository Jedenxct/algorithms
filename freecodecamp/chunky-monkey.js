
function chunkArrayInGroups(arr, size) {

    var toReturn = [];

    for(var i = 0; i < arr.length; i++) {

        if (i % size === 0) {
            toReturn.push(arr.slice(i, i + size));
        }
    }
    return toReturn;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
