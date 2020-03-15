
exports.min = function min(array = []) {
  let minElem = array.length != 0 ? array[0] : 0;
  array.forEach(element => {
    if (element < minElem) {
      minElem = element;
    }
  });

  return minElem;
}

exports.max = function max(array = []) {
  let maxElem = array.length != 0 ? array[0] : 0;

  array.forEach(element => {
    if (element > maxElem) {
      maxElem = element;
    }
  });

  return maxElem;
}

exports.avg = function avg(array = []) {
  let sumOfAllElements = 0;

  array.forEach(elem => sumOfAllElements += elem);

  return array.length != 0 ? sumOfAllElements / array.length : 0;
}
