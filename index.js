// Code your solution in this file!
//['Antonia', 'Nuru', 'Amari', 'Mo'] drivers names
const returnFirstTwoDrivers = function(drivers) {    
    const firstDrivers = drivers.slice(0, 2)
    return firstDrivers;
}

const returnLastTwoDrivers = function(drivers) {
    const lastDrivers = drivers.slice(2, 4)
    return lastDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fare) {
    return (function() {
        fare = fare * fare;
        return fare;
    }) 
}

const fareDoubler = function(createFareMultiplier) {
    let fare = createFareMultiplier * 2 
    return fare
}

const fareTripler = function(createFareMultiplier) {
    let fare = createFareMultiplier * 3
    return fare
} 

const selectDifferentDrivers = function(drivers, myFunction) { 
    if (myFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    } 
    else {
        return returnLastTwoDrivers(drivers)
    }
}