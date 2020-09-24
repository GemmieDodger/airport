const Bag = require('./Bag')
const Passenger = require('./Passenger')
const Plane = require('./Plane')
const Airport = require('./Airport')

describe('Airport', function () {
 test('how many planes run at this airport?', function () {
    const airport = new Airport({name: "Heathrow"}) 
    const flight1 = new Plane({destination: "Dublin"})
    const flight2 = new Plane({destination: "Orlando International"})
    const flight3 = new Plane({destination: "Dublin"})
    airport.addPlane(flight1)
    airport.addPlane(flight2)
    airport.addPlane(flight3)
    expect(airport.planes.length).toBe(3)
    expect(airport.planes[0].destination).toBe('Dublin')
 })

 test ('each airport knows about all the others', function () {
    expect(Airport.airports.length).toBe(1)
    const tenerife = new Airport({name: "Tenerife"}) 
    expect(Airport.airports).toBeTruthy()
    // expect(Airport.airports).toBe(2)
  
 })   

 test('an airport has plane', () => {
     const plane1 = new Plane({destination:"Florida"})
     const [Heathrow, Dublin] = Airport.airports
     Heathrow.addPlane(plane1)
     expect(plane1.location).toBe('Heathrow')

 })
})
