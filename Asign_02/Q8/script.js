function toLocalStorage(obj) {

    Object.keys(obj).forEach(key => {
      localStorage.setItem(key, JSON.stringify(obj[key]));
    });
  
    const newObj = {};
    Object.keys(localStorage).forEach(key => {
      newObj[key] = JSON.parse(localStorage.getItem(key));
    });
    return newObj;
  }



let students = {name:'Faizan', Class:'Middle', age: 35, rollNo: 158}

let a  = toLocalStorage (students);
console.log(a);