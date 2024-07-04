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
