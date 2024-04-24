/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
    .prompt([
        {
            type: 'input',
            name: 'url',
            message: "What is the URL you wish to enter?"
        }
    ])
    .then((answers) => {
        console.log("You input: " + answers.url);
        fs.writeFile("URL.txt", answers.url, (err) => {
            if (err) throw err;
            console.log("File saved!");
        });
        qr.image(answers.url, {
            type: 'png'
        }).pipe(
            fs.createWriteStream('custom.png')
        );
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't render in current environ
        } else {
            // Something else went wrong...
        }
    });
