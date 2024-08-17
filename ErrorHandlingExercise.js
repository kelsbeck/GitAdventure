function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}

const numberOfOperations = 20; //20 missions
const daysWithSuccess = 13; //try runs until there is an error, 13 days of vacation if an operation is successful
const daysWithFailure = 1; //catch runs when there is an error, unsuccessful, you’ll receive one day for your motivation
const daysBoth = 3; //finally runs always after both try and catch finished. three days for your attendance
let vacationDays = 0;

for (let i = 0; i < numberOfOperations; i++){

    try {
        mysteryOperation();
        vacationDays += daysWithSuccess;
  } catch (error) {
        vacationDays += daysWithFailure;
  } finally {
        vacationDays += daysBoth;
  }
}

console.log(vacationDays);




