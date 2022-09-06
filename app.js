// nested Array destructuring
const pets = new  Array  ();
pets [0] = new Array ("ali",17,"cat")
pets [1] = new Array ("zubair",15,"husky")
pets [2] = new Array ("talha",21,"horse")
const b = [...pets[2],"aman",13,"panda"]
b.splice(0,1);
console.log(b);

// nested object destructuring
const object = {
    name:"mubeen",
    gender: "male",
    hobby: {
      hobbyname:"programing",
      favouritefood: {
        foodname:"briyani",
      },
    },
  }
//   target one object
  const newObject = { ...object, object: { ...object.hobby.favouritefood } }

console.log(newObject)
// target whole object
const new2object={...object}
console.log(new2object)