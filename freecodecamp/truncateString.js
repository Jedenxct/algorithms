
function truncateString(str, num) {

    if (str.length > num && num > 3) {
        return str.substring(0, num - 3).concat('...');
    }
    else if (num <= 3) {
        return str.substring(0, num).concat('...');
    }

    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
