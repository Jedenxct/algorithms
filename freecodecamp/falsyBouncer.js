
function bouncer(arr) {

    return arr.filter(function(value) {
        if (!value) {
            return false;
        }
        return true;
    });
}

bouncer([7, "ate", "", false, 9]);
