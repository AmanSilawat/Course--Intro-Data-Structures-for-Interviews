//*Checking if the characters in a string are all unique

// type 1
// Use object for faster result
function is_unique(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var ch = str[i];
        if (obj[ch]) {
            return false;
        } else {
            obj[ch] = true;
        }
    }
    return true;
}
// test:
is_unique('abcdefgh'); // true
is_unique('aa'); // false

// ..
// type 2
// Fill a Set with all characters and compare its size to the string's length:
function isUnique(str) {
    return new Set(str).size == str.length;
}

console.log(isUnique('abcdefgh')); // true
console.log(isUnique('aa')); // false
