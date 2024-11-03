

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
  const div = document.createElement('div');
  const listItem = document.getElementById('listItem');
  div.classList.add('list');



  listItem.appendChild(div);
}


