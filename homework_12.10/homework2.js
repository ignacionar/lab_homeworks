// HOMEWORK 2

const fs = require('fs');

let method = process.argv[2];
let name = process.argv[3]
let age = process.argv[4]
let data = JSON.parse(fs.readFileSync('./db.json'));

try {
  if (data) {
    console.log("Running program")
  }
} catch (err) {
  console.error(err)
}

let sortedArray = data.sort((a, b) => {
  let elA = Object.keys(a);
  let elB = Object.keys(b);
  let comparison = 0;
  if (elA > elB) {
    comparison = 1;
  } else {
    comparison = -1;
  }
  return comparison;
}) 

const divideAndConquerFn = () => {

  let arrayChunk = sortedArray.length / 2;

  let subArray = sortedArray.slice(0, arrayChunk);
  let subArray2 = sortedArray.slice(arrayChunk);

  switch (method) {
    case "SEARCH":
      if (name[0] < subArray2[0]) {
        return subArray.forEach(element => {
          for (const key in element) {
            if (key.includes(name)) {
              console.log(element);
            } 
          }
        });
      } 
      subArray2.forEach(element => {
        for (const key in element) {
          if (key.includes(name)) {
            console.log(element);
          } 
        }
      });
      break;

    case "CREATE" :
      let validation = true;
      if (name[0] < subArray2[0]) {
        subArray.forEach(element => {
          for (const key in element) {
            if (key === name) {
              validation = false;
            } 
          }
        });
      }
      else {
        subArray2.forEach(element => {
          for (const key in element) {
            if (key === name) {
              validation = false;
            } 
          }
        });
      }
      if (!validation) {
        return console.log("The name must be unique");
      } 
      let obj = {
        [name]: {age: age}
      };
      data.push(obj);
      console.log(data);
      fs.writeFileSync('db.json', JSON.stringify(data));
      break;
    
    case "DELETE":
      if (name[0] < subArray2[0]) {
        return subArray.forEach(element => {
          for (const key in element) {
            if (key === (name)) {
              let index = data.indexOf(element);
              data.splice(index, index);
              fs.writeFileSync('db.json', JSON.stringify(data));
              console.log(data);
            } 
          }
        })
      }
      subArray2.forEach(element => {
        for (const key in element) {
          if (key === (name)) {
            let index = data.indexOf(element);
            data.splice(index, index);
            fs.writeFileSync('db.json', JSON.stringify(data));
            console.log(data);
          } 
        }
      });
      break;
    
    case "UPDATE":
      if (name[0] < subArray2[0]) {
        return subArray.forEach(element => {
          for (const key in element) {
            if (key === (name)) {
              let obj = {
                [name]: {age: age}
              };
              let index = data.indexOf(element);
              data.splice(index, index);
              data[index] = obj;
              fs.writeFileSync('db.json', JSON.stringify(data));
              console.log(data);
            } 
          }
        })
      }
      subArray2.forEach(element => {
          for (const key in element) {
            if (key === (name)) {
              let obj = {
                [name]: {age: age}
              };
              let index = data.indexOf(element);
              data.splice(index, index);
              data[index] = obj;
              fs.writeFileSync('db.json', JSON.stringify(data));
              console.log(data);
            } 
          }
        });
        break;

    default:
      break;
  }

}

divideAndConquerFn(data);
