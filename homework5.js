function checkProbabilityTheory(count)
{
	let num = 0;
	let odd = 0;
	let even = 0;

	for(let i = 0; i < count; i++)
	{
		num = Math.round(Math.random() * (1000-100) + 100);
		if(num % 2)
			odd++;
		else
			even++;
	}

	console.log("К-ть згенерованих чисел: " + count);
	console.log("К-ть згенерованих парних чисел: " + even);
	console.log("К-ть згенерованих непарних чисел: " + odd);
	console.log("Співвідношення згенерованих чисел: " + (even / count) * 100 + "% парних : " + (odd / count) * 100 + "% непарних");
}

checkProbabilityTheory(3)


let student =
{
	weight : 115,
	height : 190,
	name : "Denys",
	getInfo : function()
	{
		for(let key in this)
		{
			if(key != "getInfo")
				console.log(key + " : " + this[key]);
		}
	}
};

student.getInfo();

student.age = 26.

student.getInfo();


var services = 
{
	haircut : "60 грн",
	shawing : "80 грн",
	headwash : "100 грн",
	price : function()
	{
		let sum = 0;
		let curPrice = 0;
		
		for (let key in this)
		{
			if(typeof(this[key]) != 'function')
			{
				curPrice = parseFloat(this[key]);
				sum += curPrice;
			}
		}
	
		console.log("Overall sum = " + sum);
	},
	minPrice : function()
	{
		let price = Infinity;

		for (var key in this)
		{
			curPrice = parseFloat(this[key]);

			if(curPrice <= price)
			{
				price = curPrice;
			}
		}
	
		console.log("Minimum service price = " + price);
	},
	maxPrice : function()
	{
		let price = 0;

		for (let key in this)
		{
			let curPrice = parseFloat(this[key]);

			if(curPrice > price)
			{
				price = curPrice;
			}
		}

		console.log("Maximum service price = " + price);
	}
};

services.price();
services.minPrice();
services.maxPrice();

services.wallbreak = "20 грн";
services.legbreak = "120 грн";

services.price();
services.minPrice();
services.maxPrice();
