// Runs the application using imports from lib/

// Included packages required for this file.
const fs = require("fs");
const inquirer = require("inquirer");
const generate = require("./lib/shape");

// Array of questions for user input.
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "textColor",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "pixelImage",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

// Function to write data to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations on creating your image!");
    });
}
// Collect user inputs in order to generate the SVG file
inquirer.prompt(questions).then((answers) => {

var shapeElement=""

if(answers.shape ==='Circle'){
    shapeElement = generate.generateSVG(answers.text, answers.textColor, answers.shapeColor, answers.pixelImage);
    }
    else if(answers.shape ==='Square'){
        shapeElement = generateSVG.generateSVG(answers.text, answers.textColor, answers.shapeColor, answers.pixelImage);
        }
        else if(answers.shape ==='Triangle'){
            shapeElement = generateSVG.generateSVG(answers.text, answers.textColor, answers.shapeColor, answers.pixelImage);
            }
            else{
                console.error('Invalid shape: ${answers.shape}');
                return;
                writeToFile("./images/output.svg", shapeElement);
                }
            })                
.catch((error) => {
    console.log(error);
})


// ask the user for the specifics of the svg
// based onthe user input we are going to conditinaly render a shape
// once we have that shape we will pass it to the Svg class's setShapeElement method
// call the setTextElement method on the svg to create the text element

// once the two methods have been run you can call render on the svg class to get the finalized svg string
// then write that string to a file with a .svg extension
const svg = new Svg(answers.text, answers.textColor, answers.shapeColor, answers.pixelImage);
svg.setShapeElement(answers.shape);
svg.setTextElement(answers.text);
svg.render();

writeToFile("./output.svg", svg.getSvg());

// Generate the SVG code and write it it a file





// });


//         const svgData = generateSVG(answers.text, answers.textColor, answers.shapeColor, answers.pixelImage);
//         writeToFile("output.svg", svgData);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//     // Call the init function to start the app.
// init();

