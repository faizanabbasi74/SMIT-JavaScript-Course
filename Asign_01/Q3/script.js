
let a1 = +prompt('Enter a Number');
let a2 = +prompt('Enter a Number');
let a3 = +prompt('Enter a Number');
let a4 = +prompt('Enter a Number');
let a5 = +prompt('Enter a Number');

if (a1>a2 && a1>a3 && a1>a4 && a1>a5) {
    console.log(`First number ${a1} is greater than the rest `);
} else if (a2>a1 && a2>a3 && a2>a4 && a2>a5) {
    console.log(`Second number ${a2} is greater than the rest `);
} else if (a3>a1 && a3>a2 && a3>a4 && a3>a5) {
    console.log(`Third number ${a3} is greater than the rest `);
} else if (a4>a1 && a4>a3 && a4>a2 && a4>a5) {
    console.log(`Fourth number ${a4} is greater than the rest `);
} else {
    console.log(`Fifth number ${a5} is greater than the rest `);
}