var database = [
	{
		username: "Pradeep",
		password: "supersecret"
	},
	{
		username: "Neville",
		password: "123"
	},
	{
		username: "David",
		password: "777"
	}
];


var newsFeed = [
	{
		username: "Neville",
		timeline: "Learned new skills in Javascript today!"
	},
	{
		username: "David",
		timeline: "I am heading to Disneyland. Felling exicited!"
	},
	{
		username: "Ryan",
		timeline: "So tired from all that learning!"
	}

];

function isUserValid(username, password){
	for (var i=0; i<database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		 
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password !");
	}
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);