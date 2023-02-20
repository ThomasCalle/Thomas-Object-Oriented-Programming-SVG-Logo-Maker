// Runs the application using imports from lib/

// Included packages required for this file.
const fs = require("fs");
const inquirer = require("inquirer");
const {generateSVG} = require("./lib/shape");

// Array of questions for user input.
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "pixel-image",
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

// Collect user input and generate SVG file
inquirer
    .prompt(questions)
    .then((answers) => {
// ask the user for the specifics of the svg
// based onthe ukser input we are going to conditinaly render a shape
// once we have that shepe we will pass it to the Svg class's setShapeElement method
// call the setTextElement method on the svg to create the text element
// once the two methods have been run you can call render on the svg class to get the finalized svg string
// then write that string to a file with a .svg extension

        const svgData = generateSVG(answers.text, answers["text-color"], answers.shape, answers["pixel-image"]);
        writeToFile("output.svg", svgData);
    })
    .catch((error) => {
        console.log(error);
    });

    // Call the init function to start the app.
init();

