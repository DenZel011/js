var age=Number(prompt("Введіть ваш вік:"));
if(age<0)
{
	alert("Ви ввели від'ємне число");
}
else if(age==0)
	alert("Вам не може бути 0 років");
else if(age==1||age==21||age==31||age==41||age==51||age==61||age==71||age==81||age==91)
	alert("Вам " + age + " рік!");
else if(age>=2&&age<=4||age>=22&&age<=24||age>=32&&age<=34||age>=42&&age<=44||age>=52&&age<=54||age>=62&&age<=64||age>=72&&age<=74||age>=82&&age<=84||age>=92&&age<=94)
	alert("Вам " + age + " роки!");
else if(age>=5&&age<=20||age>=25&&age<=30||age>=35&&age<=40||age>=45&&age<=50||age>=55&&age<=60||age>=65&&age<=70||age>=75&&age<=80||age>=85&&age<=90||age>=95&&age<=99)
	alert("Вам " + age + " років!");
else if(age>=100)
	alert("Ого! Вам більше 100 років!");
else
	alert("Ви ввели не число");
