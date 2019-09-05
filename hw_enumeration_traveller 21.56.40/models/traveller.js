const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return arrayOfStartLocations = this.journeys.map(function(journey) {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return arrayOfEndLocations = this.journeys.map(function(journey){
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => journey.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => journey.distance >= minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return totalDistance = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const arrayOfTransport = this.journeys.map(function(journey){
    return journey.transport;
  })
  const myOrderedArray = arrayOfTransport.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator
}, [])
return myOrderedArray;
};


module.exports = Traveller;
