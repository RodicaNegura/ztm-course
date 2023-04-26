var database = [
  {
    username: "rodica",
    password: "supersecret"
  },
  {
    username: "elena",
    password: "secret"
  },
  {
    username: "sally",
    password: "super"
  }
];

var newsfeed = [
  {
    username: "Elena",
    timeline: "So tired from all this learning!"
  },
  {
    username: "Sally",
    timeline: "Javascript is so cool!"
  },
  {
    username: "Rodica",
    timeline: "Javascript is preety cool!"
  }
];

function isUserValid(username, password) {
  for (var i=0; i < database.length; i++) {
    if(database[i].username === username && database[i].password === password) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and password!");
  }
}
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
