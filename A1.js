const filesystem = require('./node_modules/graceful-fs/graceful-fs')

class Shape{

    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}

class Circle extends Shape{
    render(){

}
}

class Triangle extends Shape{
    render(){
        //return `<polygon height="100%" width="100%" points="25,75 75,25 25,25" fill="${this.color}" stroke-width="8"/>
        return <polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}" stroke-width="8"/>
    }
}

class Square extends Shape{
    render(){
        return <rect height="100%" width="100%" fill="${this.color}" stroke-width="8"/>
    }
}
function generateSVG(text,color,shape,image){
    if (shape===`Circle`){
const newShape = new Circle()
}
}

class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        //return <svg width="300" height="200"> ${this.shapeElement}${this.textElement}</svg>
        return ${this.shapeElement}\n${this.textElement}
    }
    setTextElement(text,color){
        this.textElement = <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }

}

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
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations on creating your image!");
    });
}

try {
var SquareShape = new Square();
var TriangleShape = new Triangle();
var CircleShape = new Circle();
var text = "KKK";
var color = "blue";
var svgString = "";
var writeFile = "logo.svg";

// Create a new Svg instance and add the shape and text elements to it
var svg = new Svg();
svg.setTextElement(text, color);

//Note: Only 1 document.getElementById.InnerHTML call will work, comment out the unused ones

//Print square shape
svg.setShapeElement(SquareShape);
svgString = svg.render();
console.log("Displaying square shape...\n\n" + svgString);
//document.getElementById("svg_image").innerHTML = svgString

//Print circle shape
svg.setShapeElement(CircleShape);
svgString = svg.render();
console.log("Displaying circle shape...\n\n" + svgString);
//document.getElementById("svg_image").innerHTML = svgString

//Print triangle shape
svg.setShapeElement(TriangleShape);
svgString = svg.render();
console.log("Displaying triangle shape...\n\n" + svgString);
//document.getElementById("svg_image").innerHTML = svgString

console.log("Shape generation complete!");
console.log("Writing shape to file...")
writeToFile(writeFile, svgString)

}
catch (err) {
console.log(err)
}
console.log("End of File");