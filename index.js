// Building a url to qrcode to website ap
// uqweb-terminal
import inquirer from 'inquirer';
import qrcode from "qrcode-terminal";
// const inquirer=require("inquirer")
 

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Enter your URL please\n",
        name:"URL",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
    qrcode.generate(answers.URL, {small: true}, (qrcode)=> {
        console.log(qrcode)
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });