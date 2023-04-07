let row = 5;
let star = "";

for (let i = 1; i <= row; i++) {
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);