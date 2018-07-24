let store = {drivers: [], passengers: []};
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }
  trips() {
    return store.trips.filter(trip => trip.driverId === this.id)
  }

  passengers() {
    return store.passengers.filter(passenger => this.trips.passengers.).bind(this))
  }

  passengers() {
    return store.passengers.filter(passenger => passenger.drivers.find(function()))
  }
}

class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id)
  }

  drivers() {
    return this.trips().driverId.filter(driver => driver.passengerId === this.id)
  }
}
// // Passenger class:
// //
// // A passenger has many trips, and has many drivers through trips.
// // trips() - returns all of the trips that a passenger has taken
// // drivers() - returns all of the drivers that has taken a passenger on a trip
//
//
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    if(driver){
      this.driverId = driver.id
    }
    if(passenger) {
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }

  driver() {
    return store.drivers.find(function(driver) {
      return driver.id === this.driverId }.bind(this))
  }

  passenger() {
   return store.passengers.find(function(passenger) {
     return passenger.id === this.passengerId
  }.bind(this))
  }
}
