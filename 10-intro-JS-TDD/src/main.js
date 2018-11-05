module.exports = add;

function add(a, b) {

    if (isUndefined(a) || isUndefined(b)) {
        return 0;
    }

    if (!isANumber(a)) {
        return b;
    } else if (!isANumber(b)) {
        return a;
    } else {
        return a + b;
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
