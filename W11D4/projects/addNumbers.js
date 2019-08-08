const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum = 0, numsLeft, completionCallback){
	
	if (numsLeft > 0) {
		let number_input;
		reader.question('Input a number:\n', (res) => {
		number_input = parseInt(res);
		sum += number_input;
		if (numsLeft > 1) {
			console.log(`Current sum: ${sum}.`);
		}
		addNumbers(sum, numsLeft - 1, completionCallback);
		});
	} else {
		completionCallback(sum);  
		reader.close(); 
	}
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));