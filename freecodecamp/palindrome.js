function palindrome(str) {

    var originalStr = str.toLowerCase().replace(/[\W_-]/g, '');
    console.log(originalStr);

    var splitStrArr = originalStr.split('').reverse().join('');

    if (originalStr == splitStrArr) {
        return true;
    }
    return false;
}

palindrome("_eye");
