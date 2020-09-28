//const { TestScheduler } = require('jest')
const Bag = require('./Bag')
const Passenger = require('./Passenger')
const Shuttle = require('./Shuttle')

describe('Shuttle', function () { 
    test('check has destination', function () {
        const shuttle = new Shuttle('Terminal')
        shuttle.setLocation('Bus Stop')
        shuttle.boardPassenger('Fred')
        shuttle.boardPassenger('Toby')
        expect(shuttle.destination).toBe('Terminal')
    })

    test('check has location', () => {
        const shuttle = new Shuttle('Train Station')
        shuttle.setLocation('Terminal')
        expect(shuttle.location).toEqual('Terminal')
        expect(shuttle.destination).toEqual('Train Station')
    })
        //ASYNC CALL BACK
    test('check driver', (done) => {
        const shuttle = new Shuttle('Car Park')
        const onInfo = (err,info) => {
            expect(info.driver).toBe('Peter')
            console.log(info.driver)
            done()
        } 
        shuttle.getInfo(onInfo)   
              
    })
        
})

