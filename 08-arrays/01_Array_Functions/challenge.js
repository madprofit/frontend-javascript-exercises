module.exports.reversePlusOne = function(x,y) {
    var array = x,y;
    array.reverse();
    array.unshift(1);
    return array;
}

module.exports.plusesEverywhere = function(x,y,z) {
    var array = x,y,z;
    return array.join('+');
};

module.exports.arrayQuantityPlusOne = function(x,y,z) {
    var array = x,y,z;
    return array.length + 1;
};