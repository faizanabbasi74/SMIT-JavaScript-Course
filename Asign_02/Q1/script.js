// let add = function (num){
//     return num + 5;
// }


let closure = function(num1){
    
    return function (num2){
          return num1 + num2;
    }
}

let add = closure(5);

console.log(add(10));
console.log(add(25));
console.log(add(37));