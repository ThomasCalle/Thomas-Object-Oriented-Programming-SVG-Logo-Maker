
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
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" stroke-width="8"/>`
    }
}

class Triangle extends Shape{
    render(){
        //return `<polygon height="100%" width="100%" points="25,75 75,25 25,25" fill="${this.color}" stroke-width="8"/>
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}" stroke-width="8"/>`
    }
}

class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}" stroke-width="8"/>`
    }
};
