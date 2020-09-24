class Airport {
    static airports = []

    constructor({name}) {
        this.name = name
        this.planes = []
        this.constructor.airports.push(this)
       
    }
    addPlane(plane){
        plane.setLocation(this.name)
        this.planes.push(plane)
    }


    takeOff(Plane) {
        const index = this.planes.indexOf(plane)
        this.planes.splice(index,1)
        const destinationAirport = Airport.airports.find(airport =>airport.name === plane.destination) 
        console.log(destinationAirport)
        destinationAirport.addPlane(plane)
    }
}

module.exports = Airport