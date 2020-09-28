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
    expect(Airport.airports.length).toBe(2)
 })   

//  test('an airport has plane', () => {
//      const plane1 = new Plane("Florida")
//      const [Heathrow] = Airport.airports
//      Heathrow.addPlane(plane1)
//      console.log(plane1) 
//      expect(plane1.location).toBe('Heathrow')
//  })



// //CONDENSED TAKE OFF PROCEDURE

   test('Check Gatwick to Lanzarote', () => {
      
      const airport1 = new Airport('Gatwick')
      const airport2 = new Airport('Lanzarote')
      const plane = new Plane({destination:'Lanzarote'})
      // plane.setDestination(airport2.name)
      airport1.addPlane(plane)
      expect(plane.location).toEqual('Gatwick')
      expect(plane.destination).toEqual('Lanzarote')
      airport1.takeOff(plane)
      expect(airport1.planes.length).toBe(0)
      expect(airport2.planes.length).toBe(1)
      expect(plane.location).toEqual('Lanzarote')
      //console.log(Airport.airports)
      })

//ASYNC TESTS

//ASYNC CALL BACKS

      // test('airports have a city', (done) => {
      //    const LHR = new Airport('LHR')
      //    const onInfo = (err,info) => {
      //       expect(info.city).toBe('London')
      //       done()
      //    }
      //    LHR.getInfo(onInfo)     
      // })

//ASYNC PROMISE
      // test('PROMISE airports have a city', () => {
      //    const LHR = new Airport('LHR')
      //    return LHR.getInfo()
      //       .then(info => {
      //          expect(info.city).toBe('London')
      //       })
      //       .catch(err => {
      //           expect(err).toBeNull()
      //       })
      // })      
      
// I CAN'T REMEMBER WHAT THIS IS CALLED BUT IT WORKS!!!
      test('have extra data', async () => {
         const LHR = new Airport('LHR')
         const info = await LHR.getInfo()
         expect(info.city).toBe('London')
   })
})