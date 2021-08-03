const recur = (array) => {
  for (var i = 0; i < array.length; i++) {
    for (var j = i - 1; j >= 0; j--) {
      if (array[i] == array[j]) {
        return array[i];
      }
    }
  }
  return undefined;
};

const recur2 = (input) => {
  let map = {};

  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
};
console.log(recur2([1, 3, 3, 5, 1, 2, 3, 4, 5]));
console.log(recur([1, 3, 3, 5, 1, 2, 3, 4, 5]));
