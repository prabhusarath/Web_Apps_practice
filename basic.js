// var f = prompt("Your First Name Please");
// var l = prompt("Your Last Name Please");
// var a = prompt("Your Age Please");

// console.log("your full name is "+f+ l);
// console.log("your are " + a + " years old");


// var v =5

// while(v<50)
// {
// 	if(v%5 == 0 && v%3 == 0)
// 	{
// 		console.log(v); }
// 	v  += 1; 
// }

// var answer = prompt("Are we there Yet");

// var count = 0;

// while(answer !== "yes" && answer !== "yeah"){

// var answer = prompt("Are we there Yet Again ??");

// count++;

// }

// alert("You Made It in " + count + " times");

// var answer = prompt("Are we there Yet");

// var count = 0;

// while(answer.indexOf("yes") == -1){

// var answer = prompt("Are we there Yet Again ??");

// count++;

// }

// alert("You Made It in " + count + " times");

// for(var start=10;start<40;start = start+2)
// {
// 	console.log(start)
// }

// function isEven(num)
// {
// if(num%2 == 0)
// 	return true;
// else
// 	return false;
// }

// var q = isEven(4);
// var w = isEven(21);
// var e = isEven(68);
// var r = isEven(333);

// console.log(q,w,e,r);

function fact(in_num)
{
	var res = in_num;

	for(var j=in_num-1;j>=1;j--)
	{
		res *= j
	}
	return res
}

console.log(fact(3));