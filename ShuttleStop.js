
class ShuttleStop {
    static shuttleStops = []
    constructor(name) {
        this.name = name
        this.shuttles = []
        this.constructor.shuttleStops.push(this)
    }
    
    addShuttle(shuttle) {
        shuttle.setLocation(this.name)
        this.shuttles.push(shuttle)  
    }

    departShuttle(shuttle) {
        const index = this.shuttles.indexOf(shuttle)
        this.shuttles.splice(index,1)
        const destinationShuttleStop = ShuttleStop.shuttleStops.find(shuttleStop => shuttleStop.name === shuttle.destination)
        destinationShuttleStop.addShuttle(shuttle)
    }


}

module.exports = ShuttleStop