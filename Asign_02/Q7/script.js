// function toLocalStorage(key, object) {
//   let objectString = JSON.stringify(object);
//   console.log(objectString);
//   localStorage.setItem(key, objectString);
// }

// let student = [
//   {
//     name: "Faizan",
//     age: 35,
//     education: "Masters",
//     rollNo: 98981,
//   },
//   {
//     name: "Ahmed",
//     age: 28,
//     education: "Bachelors",
//     rollNo: 98982,
//   },
// ];
// console.log(student);

// let func = toLocalStorage("Students", student);


function fromLocalStorage(key) {
    let storedObject = localStorage.getItem(key);
    return JSON.parse(storedObject);
  }

let func2 = fromLocalStorage("Students")