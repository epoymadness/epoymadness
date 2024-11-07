

hideComponents();



function hideComponents()
{
  hideSecondSec();
  hideThirdSec();
}

function nextSecOne()
{
  hideUserLogin();
  showSecondSec();
}

function toThirdSec()
{
  hideSecondSec();
  showThirdSec();
}



/*
fetch('getUsers.php')
  .then(res => {
    if (res.ok)
    {
      console.log("success!");
      return res.json();
    }
  })
  .then(data => {
    console.log(data);
  })  
*/




function fetchData()
{
  fetch('getUsers.php')
  .then(res => {
    if (res.ok)
    {
      console.log("success!");
      return res.json();
    }
  })
  .then(data => {
    console.log(data);
    getUsers(data);
  }) 
}


function getUsers(data)
{
  const userName = document.getElementById('userName').value;
  const passWord = document.getElementById('passWord').value;

    for(var i = 0; i < data.length; i++)
  {
    if (data[i].username === userName && data[i].password === passWord)
    {
      console.log("it is working");
      nextSecOne();
      displayBal(data[i].balance);
      nameDisplay(data[i].username);
      break;
    }
  }
  i = 0;
  console.log(i);
}



function displayBal(balance)
{
  const displayCurrBal = document.getElementById('displayCurrBal');
  displayCurrBal.textContent = balance;
}

function nameDisplay(name)
{
 const nameDis = document.getElementById('nameDis'); 
 nameDis.textContent = name;
}









function hideSecondSec()
{
  const secondSec = document.getElementById('secondSec');
  secondSec.classList.remove('secondSec');
  secondSec.classList.add('hidden');
}

function showSecondSec()
{
  const secondSec = document.getElementById('secondSec');
  secondSec.classList.remove('hidden');
  secondSec.classList.add('secondSec');
}

function hideUserLogin()
{
  const userLogin = document.getElementById('userLogin');
  userLogin.classList.remove('userLogin');
  userLogin.classList.add('hidden');
}

function showUserLogin()
{
  const userLogin = document.getElementById('userLogin');
  userLogin.classList.remove('hidden');
  userLogin.classList.add('userLogin');
}

function hideThirdSec()
{
  const thirdSec = document.getElementById('thirdSec');
  thirdSec.classList.remove('thirdSec');
  thirdSec.classList.add('hidden');
}

function showThirdSec()
{
  const thirdSec = document.getElementById('thirdSec');
  thirdSec.classList.remove('hidden');
  thirdSec.classList.add('thirdSec');
}