
function confirmEnding(str, target) {

    var length = target.length;
    var substring = str.substr(str.length - length, str.length);

    return target === substring;
}

confirmEnding("Bastian", "n");
