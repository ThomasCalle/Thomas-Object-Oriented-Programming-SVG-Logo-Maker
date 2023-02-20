// Example test should pass

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// You may need to add additional files in the lib folder for handling user input, writing to a file, etc. 
// Writing tests for these additional files is optional.

const shape = new Circle();
shape.setColor("green");
expect(shape.render()).toEqual(`<circle cx="25" cy="75" r="20" stroke="red" fill="green" stroke-width="8"/>`);


const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');

const shape = new Square();
shape.setColor("red");
expect(shape.render()).toEqual(`<rect x="25" y="25" width="75" height="75" stroke="red" fill="red" stroke-width="8"/>`);
