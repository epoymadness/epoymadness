
hideSections();

var firstName;
var lastName;
var userNumber;
var user;

var contacts = 
[{
"firstName": "Admin",
"lastName": "Admin",
"number": "Admin"
}]



function createUser()
{
  const first_name = document.getElementById("firstName");
  const last_name = document.getElementById("lastName");
  const user_number = document.getElementById("userNumber");
  firstName = first_name.value;
  lastName = last_name.value;
  userNumber = user_number.value;

  saveUser(firstName, lastName, userNumber);

  first_name.value = '';
  last_name.value = '';
  user_number.value = '';
}


function saveUser(firstName, lastName, userNumber)
{
  if((firstName && lastName && userNumber) == 0)
  {
    alert('you need to put smth')
  } else
  {
    contacts.push({firstName: firstName, lastName: lastName, number: userNumber});
    console.log(contacts);
  }
}




function searchUser()
{
  const user = document.getElementById('user');
  userValue = user.value;
  if (userValue == (0))
  {
    alert('you neet to put smth');
  } else
  {
    search();
  }
  user.value = '';
}






var i;
var personName;

function search()
{
  const userName = document.getElementById("user");
  var personNumber = contacts.length;
  personNumber++;
  user = userName.value;
 
  for(var i = 0; i < personNumber; i++) 
  {
    if (i >= contacts.length)
    {
      alert('no user found');
    } else if (contacts[i].firstName === user)
    {
      showUser(i);
      personName = i;
      console.log(i);
      hideSearchTab();
      showCardBox();
      break;
    }
  }
  i = 0;
}



function hideSearchTab()
{
  const searchBar = document.getElementById("searchTab");
  searchBar.classList.remove("search");
  searchBar.classList.add("hidden");
}

function showCardBox()
{
  const cardBox = document.getElementById("cardBox");
  cardBox.classList.remove("hidden");
  cardBox.classList.add("cardBox");
}


function deleteUser()
{ 
  contacts.splice(personName, 1);
  alert("User deleted");
  console.log(contacts);
  hideCardbox();
  showSearchTab();
}


function showUser(i)
{
  const first_name = document.getElementById("first_name");
  const last_name = document.getElementById("last_name");
  const contact_number = document.getElementById("contact_number");
  first_name.innerHTML = contacts[i].firstName;
  last_name.innerHTML = contacts[i].lastName;
  contact_number.innerHTML = contacts[i].number;
}


function searchTab()
{
  showTab();
  dltHistory();
}

function showTab()
{
  hideCreateObject();
  showSearchTab();
}

function hideCreateObject()
{
  const createObject = document.getElementById("createObject");
  createObject.classList.remove("createObject");
  createObject.classList.add("hidden");
}


function updateTab()
{
  eraseHistory();
  hideCardbox();
  updateContent();
  showUpdateSection();
}

function showUpdateSection()
{
  const updateSection = document.getElementById('updateSection');
  updateSection.classList.remove('hidden');
  updateSection.classList.add('updateSection');
}


function eraseHistory()
{
  const firstName = document.getElementById('first_name');
  const lastName = document.getElementById('last_name');
  const user_number = document.getElementById('contact_number');
  firstName.value = '';
  lastName.value = '';
  user_number.value = '';
}





function hideSections()
{
  hideCardbox();
  hideUpdateTab();
  hideCreateObject();
  hideSearchTab();
}



function toCreateTab()
{
  showCreateObject();
  hideHomePage();
}

function showCreateObject()
{
  const createObject = document.getElementById("createObject");
  createObject.classList.remove("hidden");
  createObject.classList.add("createObject");
}

function toSearchTab()
{
  hideHomePage();
  showSearchTab();
}

function hideHomePage()
{
  const homePage = document.getElementById("homePage");
  homePage.classList.remove("homePage");
  homePage.classList.add("hidden");
}



function prevPage()
{
  hideCardbox();
  showSearchTab();
}

function defaultVal()
{
  const pangalan = document.getElementById("first_name");
  const apilyedo = document.getElementById("last_name");
  const numero = document.getElementById("contact_number");
  pangalan.value = '';
  apilyedo.value = '';
  numero.value = '';
}

function showHomePage()
{
  const homePage = document.getElementById('homePage');
  homePage.classList.remove('hidden');
  homePage.classList.add('homePage');
}

function homePage()
{
  hideSearchTab();
  showHomePage();
}


function dltHistory()
{
  const name = document.getElementById('firstName');
  const nameName = document.getElementById('lastName');
  const numero = document.getElementById('userNumber');
  name.value = '';
  nameName.value = '';
  numero.value = '';
}

function hideCardbox()
{
  const cardBox = document.getElementById('cardBox');
  cardBox.classList.remove('cardBox');
  cardBox.classList.add('hidden');
}

function showSearchTab()
{
  const searchBox = document.getElementById('searchTab');
  searchBox.classList.remove('hidden');
  searchBox.classList.add('search');
}


function updateContent()
{
  const first_name = document.getElementById('thisName');
  const last_name = document.getElementById('thisLastName');
  const user_number = document.getElementById('user_number');
  first_name.value = contacts[personName].firstName;
  last_name.value = contacts[personName].lastName;
  user_number.value = contacts[personName].number;
}


function updateUser()
{
  alert('updated!');
  updatedUser();
  hideUpdateTab();
  showSearchTab();
}


function hideUpdateTab()
{
  const updateSection = document.getElementById('updateSection');
  updateSection.classList.remove('updateSection');
  updateSection.classList.add('hidden');
}

function updatedUser()
{
  const first_name = document.getElementById('thisName');
  const last_name = document.getElementById('thisLastName');
  const user_number = document.getElementById('user_number');
  contacts[personName].firstName = first_name.value;
  contacts[personName].lastName = last_name.value;
  contacts[personName].number = user_number.value;
}












