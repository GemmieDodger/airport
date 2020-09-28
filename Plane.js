class Plane {
    
    constructor({destination}) {
        this.destination = destination
        this.boarded = []
        this.location = undefined
    }
    boardPassenger(Passenger) {
        this.boarded.push(Passenger)
    }

    setDestination(destination) {
    this.destination = destination
    }
    
    setLocation(location){
        this.location = location
    }
}

module.exports = Plane