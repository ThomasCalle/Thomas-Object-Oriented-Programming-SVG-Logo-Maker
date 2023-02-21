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
        return `<circle cx="25" cy="75" r="20" stroke="red" fill="${this.color}" stroke-width="8"/>`
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="25,75 75,25 25,25" stroke="red" fill="${this.color}" stroke-width="8"/>`
    }
}

class Square extends Shape{
    render(){
        return `<rect x="25" y="25" width="75" height="75" stroke="red" fill="${this.color}" stroke-width="8"/>`
    }
}
function generateSVG(text,color,shape,image){
    if (shape===`Circle`){
const newShape = new Circle()

}
if (shape===`Triangle`){
    const newShape = new Triangle()
    }
    if (shape===`Square`){
        const newShape = new Square()
        }

}
