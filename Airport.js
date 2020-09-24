class Airport {
    static airports = []
    constructor({name}) {
        this.name = name
        this.planes = []
        this.constructor.airports = 
       
    }
    addPlane(Plane){
        this.planes.push(Plane)
        this.planes.location = this.name
    }
}

module.exports = Airport