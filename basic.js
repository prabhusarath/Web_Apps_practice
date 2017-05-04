var list_final = [];
var choice = prompt("What would you like to do ??");

while(choice != "quit")
{
		if(choice == "new"){
			newf();
		} else if(choice == "list"){
			list();}

	var choice = prompt("What would you like to do ??");
}

console.log("Quiting App");

function newf(){

	var ch = prompt(" Enter new  to do ??");
	list_final.push(ch);
	console.log(list_final);
}

function list(){
console.log(list_final);
}

// function quit(){

// 	console.log("Quiting App");

// }