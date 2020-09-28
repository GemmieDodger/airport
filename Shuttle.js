const fs = require('fs')
const path = require('path')  


class Shuttle {
    
    constructor(destination) {
        this.destination = destination
        this.location = undefined
        this.passengers = []
    }

    //to give an option of re-setting destination

    setDestination(destination) {
        this.destination = destination
    }

    setLocation(location) {
        this.location = location
    }

    boardPassenger(Passenger) {
        this.passengers.push(Passenger)
    }
    getInfo(onInfo) {
        const destination = this.destination
        const locationOfFile = path.join(__dirname,'shuttles.json')
        const callback = function (err, buffer) {
            const data = JSON.parse(String(buffer))
            const info = data.find(ShuttleStop => ShuttleStop.destination === destination)
            console.log(destination)
            console.log(info)
            onInfo(err,info)
        } 
        fs.readFile(locationOfFile, callback)
}
}

module.exports = Shuttle