var database = [
  {
    username: "Rodica",
    password: "supersecret"
  }
];

var newsFeed = [
  {
    username: "Elena",
    timeline: "So tired from all this learning!"
  },
  {
    username: "Sally",
    timeline: "Javascript is so cool!"
  }
];
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed)
  } else {
    alert("Sorry, wrong username and password!");
  }
};

signIn(userNamePrompt, passwordPrompt);
