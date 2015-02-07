module.exports.sumNumbers = function(array) {
  var sum = 0;
  for (var counter = 0; counter < array.length; counter++) {
    sum += array[counter];
  }
  return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {
    return inputString.toLowerCase().split(",");
}

module.exports.addIndex = function(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i ++) {
        newArray[i] = i + " is " + array[i];
}
    return newArray;
    };
