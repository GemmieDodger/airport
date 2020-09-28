//const { TestScheduler } = require('jest')
const Bag = require ('./Bag')
const Passenger = require('./Passenger')
const Shuttle = require('./Shuttle')
const ShuttleStop = require('./ShuttleStop')  


describe('ShuttleStop', function () {
    test('check shuttles at shuttle stop', () => {
        const busStop = new ShuttleStop('Bus Stop')
        const shuttle1 = new Shuttle('Terminal')
        const shuttle2 = new Shuttle('Train Station')
        busStop.addShuttle(shuttle1)
        busStop.addShuttle(shuttle2)
        expect(busStop.shuttles.length).toBe(2)
    }) 

    test('Journey from Train Station to Terminal', () => {
        const trainStation = new ShuttleStop('Train Station')
        const terminal = new ShuttleStop('Terminal')
        const shuttle = new Shuttle('Terminal')
        // console.log(ShuttleStop.shuttleStops)
        trainStation.addShuttle(shuttle)
        // console.log(ShuttleStop.shuttleStops)
        expect(shuttle.location).toEqual('Train Station')
        expect(shuttle.destination).toEqual('Terminal')
        trainStation.departShuttle(shuttle)
        // console.log(ShuttleStop.shuttleStops)
        expect(shuttle.location).toBe('Terminal')
        expect(trainStation.shuttles.length).toBe(0)
        expect(terminal.shuttles.length).toBe(1)
    })



})