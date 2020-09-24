class Plane {
    constructor({destination}) {
        this.destination = destination
        this.boarded = []
    }
    boardPassenger(Passenger) {
        this.boarded.push(Passenger)
    }

    setDestination(destination)
}

module.exports = Plane