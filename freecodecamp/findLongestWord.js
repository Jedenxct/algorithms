
function findLongestWord(str) {

    var maxLength = 0;
    var wordsArray = str.split(' ');

    for (var i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].length > maxLength) {
            maxLength = wordsArray[i].length;
        }
    }
    return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
