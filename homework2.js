// HOMEWORK 2

const fs = require('fs');

let method = process.argv[2];
let name = process.argv[3]
let age = process.argv[4]
let data = JSON.parse(fs.readFileSync('./db.json'));

if (method === 'SEARCH') {
  data.forEach(element => {
    for (const key in element) {
      if (key.includes(name)) {
        console.log(element);
      }  
    }
  })
} else if (method === "CREATE") {
  let validation = true;
  data.forEach(element => {
    for (const key in element) {
      if (key === (name)) {
        validation = false
      } 
    }
  })
  if (!validation) {
    return console.log("The name must be unique")
  } 
  let obj = {
    [name]: {age: age}
  }
  data.push(obj)
  console.log(data);

  fs.writeFileSync('db.json', JSON.stringify(data))

} else if (method === "DELETE") {
  data.forEach(element => {
    for (const key in element) {
      if (key === (name)) {
        let index = data.indexOf(element);
        data.splice(index);
        fs.writeFileSync('db.json', JSON.stringify(data));
        console.log(data);
      } 
    }
  })
} else if (method === "UPDATE") {
  data.forEach(element => {
    for (const key in element) {
      if (key === (name)) {
        let obj = {
          [name]: {age: age}
        }
        let index = data.indexOf(element);
        data.splice(index);
        data[index] = obj;
        fs.writeFileSync('db.json', JSON.stringify(data));
        console.log(data);
      } 
    }
  })
}








