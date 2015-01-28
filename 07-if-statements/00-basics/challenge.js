module.exports.favoriteNumber = function (fav, guess) {
    if (guess > fav) {
        return "Too high";
}
    else if (guess < fav) {
        return "Too low";
    }
    else if (guess === fav) {
        return "You got it!";
    }
};


module.exports.checkLock = function (firstNum, secondNum, thirdNum, fourthNum) {
    var firstNumCombo = firstNum == 3 || firstNum == 5 || firstNum == 7;
    var secondNumCombo = secondNum == 2;
    var thirdNumCombo = 5 <= thirdNum && thirdNum <= 100;
    var fourthNumCombo = 9 > fourthNum || fourthNum > 20; {
        if (firstNum && secondNum && thirdNum && fourthNum)
            return ("correct");
    }
    else {
        return "incorrect";
    }
};

module.exports.canIGet = function(item, money) {
  if (money >= 1 && item == "Apple Sticker") {
    return true;
  } else if (money >= 999 && (item == "MacBook Air" || item == "Apple Sticker")) {
    return true;
  } else if (money >= 1299 && (item == "MacBook Pro" || item == "MacBook Air" || item == "Apple Sticker")) {
    return true;
  } else if (money >= 2499 && (item == "Mac Pro" || item == "MacBook Pro" || item == "MacBook Air" || item == "Apple Sticker")) {
    return true;
  } else {
    return false;
  }
};
