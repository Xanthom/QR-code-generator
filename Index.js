import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
    message:"Provide your website link:",
    name:"URL",
    }
  ])
  .then((answers) => {

    const url = answers.URL;
    var qr_png = qr.image('url');
    qr_png.pipe(fs.createWriteStream('qr.png'));

    fs.writeFile('URL.txt', url , (err) => {
        if (err) throw err;
          console.log('The file has been saved!');
      }); 
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });