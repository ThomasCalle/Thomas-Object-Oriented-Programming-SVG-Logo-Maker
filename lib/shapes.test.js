// Example test should pass

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// You may need to add additional files in the lib folder for handling user input, writing to a file, etc. 
// Writing tests for these additional files is optional.