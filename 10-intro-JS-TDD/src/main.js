module.exports = add;

function add(a, b) {
    if (isANumber(a) && isANumber(b)) {
        return a + b;
    } else if (isANumber(a)) {
        return a;
    } else if (isANumber(b)) {
        return b;
    } else {

        return 0; // This can be deleted as well ;)
    }
}


/*
   Utilities functions (just for helping)
 */

// OBS: this is quite a ugly helper method: DELETE ME!
function isUndefined(x) {
    return x === undefined;
}

// Tips: DON'T use Number.NaN
function isANumber(x) {
    return typeof(x) === 'number';
}
