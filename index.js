// Runs the application using imports from lib/

// Included packages required for this file.
const fs = require("fs");
const inquirer = require("inquirer");
const generateSVG = require("");

// Array of questions for user input.
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shape",
        message: "Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Which Pixel Image would you like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

// Function to 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (error) {
            return console.log(err);
        }
        console.log("Congratulaations om creating your image:");
    });
}