// Code challenge 2
// Function to check the speed of a car and calculate demerit points
const prompt = require("prompt-sync")({sigint:true});
function checkSpeed() {
    // Speed limit
    const speedLimit = 70; 
    // 5km/s above the speed limit
    const kmPerDemeritPoint = 5; 
    // Max demerit points
    const maxDemeritPoints = 12; 
    //speed input from the user
    const speed = parseInt(prompt("Enter the speed of the car: "));
    if (speed <= speedLimit) {
      //If speed is less <=70
      console.log("Ok"); 
    }
     else if (speed > speedLimit){
      // Calculate demerit points for exceeding the speed limit
      let demeritPoints = 0
      demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      if (demeritPoints >= maxDemeritPoints) {
        //if demerit points exceed 12 the licence is suspended
        console.log("License suspended"); 
      } else {
        // otherwise print the demerit points
        console.log(`Points: ${demeritPoints}`);
      } 
    }
  }
  checkSpeed();