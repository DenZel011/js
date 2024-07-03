function drawTriangleSimple(height, symbol) 
{
	let line = "";
	for(let i = 0; i < height; i++)
	{
		line+=symbol
		console.log(line);
	}
}

drawTriangleSimple(5, "*");

function drawTriangleHard(height, symbol)
{
	let line = "";
	for(let i=0; i < height; i++)
	{
		for(let j=0; j<=i; j++)
		{
			line += symbol;
		}
		line += "\n";
	}
	console.log(line);
}

drawTriangleHard(4, "?");

function pow(x, y)
{
	let result = x;
	for(let i = 0; i < y-1; i++)
	{
		result *= x;
	}
	return result;
}

console.log(pow(2,3));