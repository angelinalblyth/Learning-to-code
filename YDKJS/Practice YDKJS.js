const taxRate = 0.08;
const phonePrice = 99.99;
const accessoryPrice = 9.99; 
const spendingThreshold = 200;

var bankBalance = 308.00;
var amount = 0; 

//functions

function calculateTax (amount) {
	return amount * taxRate;
}

//format

function formatCost(amount) { 
	return "£" + amount.toFixed(2);
}

//while loop 

while (amount < bankBalance) {
	amount = amount + phonePrice;

	if(amount < spendingThreshold) {
		amount = amount + accessoryPrice;
	}
}

amount = amount + calculateTax(amount);

console.log("Your balance is " + formatCost(amount))

if(amount > bankBalance) {

	console.log("you cant afford this");
	
}