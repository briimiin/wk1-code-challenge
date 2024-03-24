//code challenge one
//calculates the grade based on the student's marks
const prompt = require("prompt-sync")({sigint:true});
function calculateGrade(mark) {
    if (mark > 79) {
      return "A";
    } else if (mark >= 60 && mark <= 79) {
      return "B";
    } else if (mark >= 50 && mark <= 59) {
      return "C";
    } else if (mark >= 40 && mark <= 49) {
      return "D";
    } else {
      return "E";
    }
  }
  //prompt the user to enter marks and display it
  function gradeGenerator() {
    let mark =prompt("Enter student's mark (0-100):");
  //checks if the input is valid
    if (mark < 0 || mark > 100 ||isNaN(parseFloat(mark))) {
      console.log("Invalid input!");
    } else {
      //calculates the grade
      let grade = calculateGrade(mark);
      //displays the grade
      console.log(`The student's grade is: ${grade}`);
    }
  }
  //calls the gradegenerator to start the program
  gradeGenerator();