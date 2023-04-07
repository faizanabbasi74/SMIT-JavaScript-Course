let input1 = +prompt('Enter a number')
let input2 = +prompt('Enter a number')

if (input1 > input2){
    console.log(`${input1} input1 is larger than input2`);
} else if (input1 === input2) {
    console.log('Both inputs are equal')
} else {
    console.log(`${input2} input2 is larger than input1`)
}