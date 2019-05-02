// Add your Circle class here

class Circle {
    constructor(radius){
        this.radius = radius;
    }
    
    get diameter(){
        return this.radius*2
    }

    get circumference(){
        return (Math.PI * this.diameter)
    }

    get area(){
        return Math.pow(this.radius,2)*Math.PI
    }

    set area(area){
        this.radius = Math.pow(this.area, .5)/Math.PI
    }

    set diameter(dia){
        this.radius = dia/2
    }

    set circumference(c){
        this.radius = c/2/Math.PI
    }
}