class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        //return `<svg width="300" height="200"> ${this.shapeElement}${this.textElement}</svg>`
        return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /></head><body><svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg></body></html>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }

};