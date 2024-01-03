// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    var headquarters = 42;
    if(pickup >= headquarters){
        return pickup - headquarters;
    } else {
        return headquarters - pickup;
    }
}

function distanceFromHqInFeet(inFeet) {
    var feet = distanceFromHqInBlocks(inFeet);
    return feet * 264;
}



function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if(destination >= start){
        return (destination - start) * 264;
    } else {
        return (start - destination) *264;
    }
  }



function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    var distanceInFeet = distanceTravelledInFeet(start, destination);
    if(distanceInFeet <= 400){
        return 0;
    } else if(distanceInFeet > 400 && distanceInFeet <= 2000) {
        return ((distanceInFeet - 400) * 2) / 100;
    } else if(distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else if(distanceInFeet > 2500) {
        return "cannot travel that far";
    }
}


