let fs = require("fs");

function checkIfMatch(arr, i) {
  let baseVal = arr[i];
  let otherVals = arr.filter((item, idx) => {
    return idx !== i;
  });
  for (let i = 0; i < otherVals.length; i += 1) {
    if (baseVal + otherVals[i] === 2020) {
      console.log(baseVal * otherVals[i]);
    }
  }
}

fs.readFile("input.txt", "utf8", function(error, input) {
  let arr = input.split('\n').map(val => Number(val));

  for (let i = 0; i < arr.length; i += 1) {
    checkIfMatch(arr, i);
  }

  for (let i = 0; i < arr.length; i += 1) {
    let baseVal = arr[i];
    let otherVals = arr.filter((item, idx) => {
      return idx !== i;
    });
    for (let j = 0; j < otherVals.length; j += 1) {
      let baseVal2 = arr[j];
      let otherVals2 = otherVals.filter((item2, idx2) => {
        return idx2 !== j;
      });
      for (let k = 0; k < otherVals2.length; k += 1) {
        if (baseVal2 + otherVals2[k] === 2020) {
          console.log(baseVal2 * otherVals2[k]);
        }
      }
    }
  }
});
