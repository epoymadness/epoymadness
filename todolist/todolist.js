




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
  dltBtn.onclick = function()
  {
    dltList(this);
  }


  checkBox.type = 'checkbox';
  checkBox.id = 'checkd';
  checkBox.onclick = function()
  {
    checkbox(this);
  };
  

  console.log(value);
  todos.classList.add('listLess');
  todos.classList.add('list');
  todos.textContent = value;


  protoType.appendChild(todos);
  todos.appendChild(checkBox);
  todos.appendChild(dltBtn); 
  todos.id = 'noodles';
}



function checkbox(checkBox)
{
  if (checkBox.checked == true)
  {
    checkBox.parentNode.classList.remove('list');
    checkBox.parentNode.classList.add('checked');
  } else
  {
    checkBox.parentNode.classList.remove('checked');
    checkBox.parentNode.classList.add('list');
  }
}



function dltList(input)
{
  input.parentNode.remove();
}


      


