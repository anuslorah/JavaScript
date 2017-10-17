//convert the grade
function grading() {
    
    //declare variables
    var input, grade;

    //check if user even wants to enter a grade
    while (input !== 999) {
    
        //create prompt to ask user for a numberic grade and validate that entry
        input = parseFloat(prompt("Please enter numeric grade from 0 to 100 \nor enter 999 to end entries", "999"));

        //run through all grade options
        if (input <= 100 && input >= 88) {
            grade = "A";
            alert("Number grade = " + input + "\nLetter grade = " + grade);
        } else if (input <= 87 && input >= 80) {
            grade = "B";
            alert("Number grade = " + input + "\nLetter grade = " + grade);
        } else if (input <= 79 && input >= 68) {
            grade = "C";
            alert("Number grade = " + input + "\nLetter grade = " + grade);
        } else if (input <= 67 && input >= 60) {
            grade = "D";
            alert("Number grade = " + input + "\nLetter grade = " + grade);
        } else if (input <= 60 && input >= 0) {
            grade = "F";
            alert("Number grade = " + input + "\nLetter grade = " + grade);
        } else if (input === 999) {
            alert("Thank you for using the grading script!");
        } else {
            alert("This is not a valid grade! \nPlease enter a number between 1 and 100.");
        }
    }
}//end of grading()