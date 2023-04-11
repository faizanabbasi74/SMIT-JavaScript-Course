function toLocalStorage(key, object) {
  let objectString = JSON.stringify(object);
  console.log(objectString);
  localStorage.setItem(key, objectString);
}

let student = {
  name: "Faizan",
  age: 35,
  education: "Masters",
  rollNo: 98981,
};
console.log(student);

let func = toLocalStorage("Students", student);
