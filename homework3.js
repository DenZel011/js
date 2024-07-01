let unit = prompt("Введіть одиницю вимірювання ('кг', 'год' або 'км')");
let number = 0;
switch(unit)
{
	case "кг":
	{
		number = Number(prompt("Введіть число"));
		alert(number + " кг - це " + number*1000 + " г");
		break;
	}
	case "год":
	{
		number = Number(prompt("Введіть число"));
		alert(number + " год - це " + number*60 + " хв");
		break;
	}
	case "км":
	{
		number = Number(prompt("Введіть число"));
		alert(number + " км - це " + number*1000 + " м");
		break;
	}
	default:
	{
		alert("Ви ввели невірну одиницю вимірювання");
		break;
	}	
}