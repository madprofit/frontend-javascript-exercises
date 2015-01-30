module.exports.newArray = function(name1,name2,name3,name4) { 
    return [name1,name2,name3,name4];
}

module.exports.firstAndLast = function (array) {
    var lastElementIndex = array.length - 1;
    var firstElement = array[0];
    var lastElement = array[lastElementIndex];
    return [firstElement, lastElement];
}

