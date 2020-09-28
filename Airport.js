const fs = require('fs') //fs = file system, built into node
const path = require('path')

class Airport {
    static airports = []

    constructor(name) {
        this.name = name
        this.planes = []
        this.constructor.airports.push(this)

        // {} THIS MEANS THE NAME BECOMES AN OBJECT AND REQUIRES US TO ASIGN AND OBJECT {name:'florida'}
        // constructor({name}) {
        //     this.name = name
        //     this.planes = []
        //     this.constructor.airports.push(this)
       
    }
    addPlane(plane){
        plane.setLocation(this.name)
        this.planes.push(plane)
    }


    takeOff(plane) {
        const index = this.planes.indexOf(plane)
        this.planes.splice(index,1)
        const destinationAirport = Airport.airports.find(airport =>airport.name === plane.destination) 
        destinationAirport.addPlane(plane)
    }

    //ASYNC FUNCTIONS

    //CALLBACK FUNCTION  - WORKING
    // getInfo(onInfo) {
    //     const airportName = this.name
    //     const locationOfFile =path.join(__dirname,'airports.json')
    //     const callback = function (err, buffer) {
    //         const data = JSON.parse(String(buffer)) 
    //         // const arrayOfAirports = Object.keys(data).map(key => { return data[key]})
            
    //         const info = data.find(airport => airport.iata === airportName)
    //         console.log(airportName)
    //         console.log(info)
    //         onInfo(err,info)
    //     }
    //     fs.readFile(locationOfFile, callback)
    // }
    //A SYNC PROMISE FUNCTION - Working
    getInfo() {
        return new Promise((resolve, reject) => {
            const locationOfFile =path.join(__dirname,'airports.json')
            fs.readFile(locationOfFile, (err, data) => {
                if (err) return reject(err)
                const airportName = this.name //airport to be found
                const dataString = JSON.parse(String(data))  //data of airports
                const info = dataString.find(airport => airport.iata === airportName)
                //CHECKS
                // console.log(info)
                // console.log(info.city)
                resolve(info)
            })
        })
    }
   
    // getInfo(onInfo) { //this doesn;t work yet
    //     const airportName = this.name
    //     const locationOfFile = path.join(__dirname, 'airports.json')
    //     const callback = function (err, buffer) {
    //         const data = JSON.parse(String(buffer))
    //         const arrayOfAirports = Object.keys(data).map(key => )
    //         console.log(Object.keys(data).filter())
    //         onInfo(err,data)
    //         fs.readFile(locationOfFile,callback)
    // }
    // getInfo() { //promise calls a function with resolve if right reject if wrong
    //     return new Promise(function (resolve, reject) {
    //         fs.readFile(path.join(__dirname,'airports.json'), (err, buffer) => {
    //         const arrayOfAirports = Object.keys(data).map(key => )
    //         console.log(Object.keys(data).filter())
    //         onInfo(err,data)
    //     })    


}
module.exports = Airport