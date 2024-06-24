document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('todoInput'); //get the value from the input field
    const taskText = input.value.trim();            
    
    if (taskText === '') return;  //checks for empty input

    addTodoItem(taskText);
    input.value = '';    //clear the input field
}); 


function addTodoItem(taskText) {             //function to add a new task 
    const li = document.createElement('li'); //li is created represent the new task 
    
    const checkbox = document.createElement('input'); // a new input type checkbox is created
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() { //event is added to the checkbox to handle the change event 
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    const span = document.createElement('span'); //holds the task text
    span.textContent = taskText; 

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerHTML = '🗑️'; 
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(checkbox);   // appended as children of the li element 
    li.appendChild(span);
    li.appendChild(deleteButton);

    document.getElementById('todoList').appendChild(li); // the created li element is appended to the ul 
}