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
    expect(Airport.airports).toBeTruthy()
    const airport = new Airport({name: "Heathrow"}) 
    const airport = new Airport({name: "Dublin"}) 
    expect(Airport.airports[0]).toBe('Heathrow')
    expect(Airport.airports[1]).toBe('Dublin')
 })   

 test('an airport has plane', () => {
     const plane1 = new Plane()
     const [Heathrow, Dublin] = Airport.airports
     expect(plane1.location).toBe('Heathrow')

 })
})
