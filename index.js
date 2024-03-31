// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    const hq = 42;
    if (location >= hq) {
        return location - hq;
    } else {
        return hq - location;
    }
}
console.log(distanceFromHqInBlocks(35)); 
console.log(distanceFromHqInBlocks(15));

function distanceFromHqInFeet(street) {
    const hqStreet = 42;
    const feetPerBlock = 264; 
    const distanceInBlocks = Math.abs(street - hqStreet);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
}


console.log(distanceFromHqInFeet(35)); 
console.log(distanceFromHqInFeet(15)); 
console.log(distanceFromHqInFeet(42)); 

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(destination - start);
    return distanceInFeet;  

    function calculatesFarePrice(start, destination) {
        const feetPerBlock = 264;
        const distanceInFeet = Math.abs(destination - start) * feetPerBlock;
        if (distanceInFeet > 2500) {
            return 'Rides over 2500 feet are not allowed.';
        }
        if (distanceInFeet <= 400) {
            return 0;
        }
        let farePrice = 0;

        if (distanceInFeet <= 2000) {
            farePrice = (distanceInFeet - 400) * 0.02;
        }
        else {
            farePrice = 25;
        }
        return farePrice;