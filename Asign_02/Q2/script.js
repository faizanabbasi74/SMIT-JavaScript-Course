const arr1 = [
  "Faizan",
  "Jibran",
  "Kashan",
  "Daniyal",
  "Mouje",
  "Fahad",
  "Kaleem",
];

function recFunc(arr, val) {
  if (arr.length === 0) {
    return false;
  } else if (arr[0] === val) {
    return true;
  } else {
    return recFunc(arr.slice(1), val);
  }

}

let a1 = recFunc(arr1, "Faizan");
console.log(a1);

let a2 = recFunc(arr1, "Noman");
console.log(a2);

let a3 = recFunc(arr1, "Kaleem");
console.log(a3);
