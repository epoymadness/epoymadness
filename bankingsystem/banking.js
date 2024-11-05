

hideComponents();



function hideComponents()
{
  hideSecondSec();
}

function nextSecOne()
{
  hideUserLogin();
  showSecondSec();
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

