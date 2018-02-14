
function mutation(arr) {

    var firstWordLetters = arr[0].toLowerCase().split('');
    var secondWordLetters = arr[1].toLowerCase().split('');

    return secondWordLetters.every(function(val) { return firstWordLetters.indexOf(val) >= 0; });
}

mutation(["hello", "hey"]);
