var database = [
	{
		username: "Pradeep",
		password: "supersecret"
	}
];


var newsFeed = [
	{
		username: "Neville",
		timeline: "It was a very productive day. Learned new tricks in Javascript !"
	},
	{
		username: "David",
		timeline: "I am heading to Disneyland. Felling exicited!"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
	if (user === database[0].username && 
		pass === database[0].password) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password !");
	}
}

signIn(userNamePrompt, passwordPrompt);