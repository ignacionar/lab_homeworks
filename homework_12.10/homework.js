// HOMEWORK 1

const https = require('https');
const fs = require("fs");
const path = require('path');

let firstArg = process.argv[2]
let secondArg = process.argv[3]

// Image used: https://images.freeimages.com/images/large-previews/a11/fall-pic-vermont-country-road-1568190.jpg

const filename = path.basename(secondArg);
const exts = ["jpg", "png", "jpeg", "webp"];
const file_ext = filename.split(".").pop();

// VALIDATIONS
if (exts.includes(file_ext)) {  

  const req = https.get(firstArg, (res) => {

    let folderArray = secondArg.split('/');

    //                                              .        +        Folder Name     +      Filename 
    const fileStream = fs.createWriteStream((folderArray[0] + "/" + folderArray[1] + "/") + filename);
    res.pipe(fileStream);

    fileStream.on("error", (err) => {
      console.log("Error writing to the stream");
      console.log(err);
    })

    fileStream.on("finish", () => {
      fileStream.close();
      console.log("The image was successfully downloaded");
    })
  })

  req.on("error", (err) => {
    console.log("Error downloading the image");
    console.log(err);
  })
} else {
  console.log("The file extension is incorrect");
}

// Reseting process arguments
process.argv.splice(2, 3);
console.log(process.argv);


