// HOMEWORK 2

const fs = require('fs');

let method = process.argv[2];
let name = process.argv[3]
let age = process.argv[4]
let data = JSON.parse(fs.readFileSync('./db.json'));

const divideAndConquerFn = (array, method) => {

  array.sort();

  let arrayChunk = array.length / 2;

  let subArray = array.slice(0, arrayChunk);
  let subArray2 = array.slice(arrayChunk);

  if (method === "SEARCH") {
    subArray.forEach(element => {
      for (const key in element) {
        if (key.includes(name)) {
          console.log(element)
        } 
      }
    });
    subArray2.forEach(element => {
      for (const key in element) {
        if (key.includes(name)) {
          console.log(element);
        } 
      }
    });
  } else if (method === "CREATE") {
    let validation = true;
    subArray.forEach(element => {
      for (const key in element) {
        if (key === name) {
          validation = false;
        } 
      }
    });
    subArray2.forEach(element => {
      for (const key in element) {
        if (key === name) {
          validation = false;
        } 
      }
    });
    if (!validation) {
      return console.log("The name must be unique");
    } 
    let obj = {
      [name]: {age: age}
    }
    data.push(obj);
    console.log(data);
    fs.writeFileSync('db.json', JSON.stringify(data));
  } else if (method === "DELETE") {
    subArray.forEach(element => {
      for (const key in element) {
        if (key === (name)) {
          let index = data.indexOf(element);
          data.splice(index);
          fs.writeFileSync('db.json', JSON.stringify(data));
          console.log(data);
        } 
      }
    })
    subArray2.forEach(element => {
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
    subArray.forEach(element => {
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
    subArray2.forEach(element => {
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

}

divideAndConquerFn(data, name, method);






