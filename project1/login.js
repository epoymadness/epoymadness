
// 2:08:49
var myUsername;
var myPassword;

var details = 
{
  username: ['Admin'],
  password: ['Admin']
};

const loginPage = document.getElementById("login");
const signUpPage = document.getElementById("signUp");
loginPage.classList.remove("login");
loginPage.classList.add("hidden");


function signUp()
{
  const signUpPage = document.getElementById("signUp");
  const username = document.getElementById("firstName");
  const password = document.getElementById("lastName");
  const regUser = username.value;
  const regPassword = password.value;

  if ((regUser && regPassword) == "")
  {
    alert("you need to put smth");
  }else
  {
  details.username.push(regUser);
  details.password.push(regPassword);
  console.log(details);

  
  signUpPage.classList.add("hidden");
  loginPage.classList.remove("hidden");
  loginPage.classList.add("login");
  }
}



//for login function
var i;
var indicator = false;


function login()
{
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const loginUsername = username.value;
  const loginPassword = password.value;


  i = 0;
  while(i < details.password.length)
  {
    if ((loginUsername== details.username[i]) && (loginPassword == details.password[i]))
    {
      indicator = true;
      break;
    } else
    {
      i++
    }
    indicator = false;
  }
  i=0;


  switch (indicator)
  {
    case true:
      console.log("login");
      break;

    default:
      console.log("Incorrect password or username");
  }

}



