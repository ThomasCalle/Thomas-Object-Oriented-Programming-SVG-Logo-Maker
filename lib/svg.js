class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg width="300" height="200"> ${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElemenet(shape){
        this.shapeElement = shape.render()

    }

}

// ask the user for the specifics of the svg
// based onthe ukser input we are going to conditinaly render a shape
// once we have that shepe we will pass it to the Svg class's setShapeElement method
// call the setTextElement method on the svg to create the text element
// once the two methods have been run you can call render on the svg class to get the finalized svg string
// then write that string to a file with a .svg extension


const mysvg = new Svg()

const asdf = new Circle()

mysvg.setShapeElemenet(asdf)

