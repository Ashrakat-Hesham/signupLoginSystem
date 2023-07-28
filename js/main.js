

























let signUpName = document.getElementById("signUpName");
let signUpEmail = document.getElementById("signUpEmail");
let signUpPassword = document.getElementById("signUpPassword");
let signUpBtn = document.getElementById("signUpBtn");
let signUpMsg = document.getElementById("signUpMsg");

let users = [];
if (localStorage.getItem("user") != null) {
  users = JSON.parse(localStorage.getItem("user"));
}
function signUp() {
  let user = {
    name: signUpName.value,
    email: signUpEmail.value,
    password: signUpPassword.value,
  };
  if (
    signUpName.value == "" ||
    signUpEmail.value == "" ||
    signUpPassword.value == ""
  ) {
    signUpMsg.innerHTML = "All Inputs Are Required";
    signUpMsg.style.color = "red";
  } else if (oldUser() == true) {
    signUpMsg.innerHTML = "User already exists";
    signUpMsg.style.color = "red";
  } else {
    users.push(user);
    localStorage.setItem("user", JSON.stringify(users));
    signUpMsg.innerHTML = "success";
    signUpMsg.style.color = "green";
  }
}

function oldUser() {
  for (let i = 0; i < users.length; i++) {
    if (
      signUpName.value == users[i].name &&
      signUpEmail.value == users[i].email &&
      signUpPassword.value == users[i].password
    ) {
      return true;
    }
  }
  return false;
}
if (signUpBtn != null) {
  signUpBtn.addEventListener("click", function () {
    signUp();
  });
}


//signIn
let logInEmail = document.getElementById('logInEmail')
let logInPassword = document.getElementById('logInPassword')
let logInMsg = document.getElementById('logInMsg')
let logInBtn = document.getElementById('logInBtn')
function login() {
  if (logInEmail.value == '' || logInPassword.value == '') {
    logInMsg.innerHTML = 'all inputs are required';
    logInMsg.style.color = 'red'
  }
  else if (isoldUser() == false) {
    logInMsg.innerHTML = 'incorrect email or password'
    logInMsg.style.color = 'yellow'
  }
  else {
    logInBtn.href = 'home.html';
  }
}

function isoldUser() {
  for (let i = 0; i < users.length; i++) {
    if (logInEmail.value == users[i].email && logInPassword.value == users[i].password) {
      localStorage.setItem('currentUser', JSON.stringify(users[i].name))
      username = users[i].name;
      return true;
    }
  }
  return false;
}
if (logInBtn != null) {
  logInBtn.addEventListener('click', login)
}



//home
let homeParagraph=document.getElementById('homeParagraph')
if(homeParagraph!=null){
  var username=JSON.parse(localStorage.getItem('currentUser'))
  homeParagraph.innerHTML=`Welcome ${username}`
}