
let subMaths = +prompt('Enter your Math score out of 100');
let subEng = +prompt('Enter your English score out of 100');
let subSci = +prompt('Enter your Science score out of 100');

let avgMarks = (subEng + subMaths + subSci)/3


if (avgMarks < 60) {
    console.log('Grade F');
} else if (avgMarks < 70){
    console.log('Grade D');
} else if (avgMarks < 80){
    console.log('Grade C');
} else if (avgMarks < 90){
    console.log('Grade B');
} else {
    console.log('Grade A');
}