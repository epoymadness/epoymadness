

function showInput()
{
  const valList = document.getElementById('todoList');
  var listed = valList.value;
  console.log(listed);
  createDiv(listed);
  valList.value = '';
}



function createDiv(value)
{
  const protoType = document.getElementById('protoType');
  const todos = document.createElement('li');
  const checkBox = document.createElement('input');
  const dltBtn = document.createElement('input');
  dltBtn.type = 'button';
  dltBtn.id = 'dltList';
  dltBtn.onlick = dltList;
  checkBox.type = 'checkbox';
  checkBox.id = 'checkd';
  checkBox.onclick = checkbox;
  


  console.log(value);
  todos.classList.add('listLess');
  todos.classList.add('list');
  todos.textContent = value;

  protoType.appendChild(todos);
  todos.appendChild(checkBox);
  todos.appendChild(dltBtn); 
  todos.id = 'noodles';
}


function checkbox()
{
  const checkBox = document.getElementById('checkd');
  const todos = document.getElementById('noodles');

  if (checkBox.checked == true)
  {
    todos.classList.remove('list');
    todos.classList.add('checked');
  }
}


function dltList()
{
  console.log('dltList');
}