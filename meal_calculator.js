// Node.js project #1
// a meal calculator program made using Javascript running off of Node.js on Linux console

// Dinner Class
function Dinner(meat, grain, vegetable, drink, cost) {
	this.meat = meat;
	this.grain = grain;
	this.vegetable = vegetable;
	this.drink = drink;
	this.cost = cost;
};

//instantiating Dinner Objects
var william = new Dinner("chicken", "sweet potato", "salad", "water", 8.25);
var heather = new Dinner("tofu", "quinoa", "salad", "water", 9.75);

// here are some functions
var get_subtotal = function (person1, person2) {
	var sub_total = person1.cost + person2.cost;
    return sub_total;
};

var get_total_tax = function () {
	var total_tax = get_subtotal(william, heather)*0.075;
	return total_tax;
};

var get_tip = function () {
	var tip_total = get_subtotal(william, heather) * 0.20;
	return tip_total;
};

var get_partial_bill = function (person) {
	var cost = person.cost + person.cost*0.075 + get_tip()/2;
	return cost;
};

var total_bill = get_subtotal(william, heather) + get_total_tax() + get_tip();

// lets print to the linux console
console.log("\nTotal bill is: $" + Math.round(100*total_bill)/100);
console.log("William owes: $" + Math.round(100*get_partial_bill(william))/100);
console.log("Heather owes: $" + Math.round(100*get_partial_bill(heather))/100 + '\n');