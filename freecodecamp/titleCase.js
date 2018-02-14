
function titleCase(str) {

    var wordsArr = str.toLowerCase().split(' ');

    for(var i = 0; i < wordsArr.length; i++) {
        wordsArr[i] = wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1);
    }

    var final = wordsArr.join(' ');

    return final;
}

console.log(titleCase("I'm a little tea pot"));