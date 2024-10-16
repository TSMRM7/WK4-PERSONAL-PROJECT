document.addEventListener('DOMContentLoaded', () => {

    fetch('db.json')
        .then(response => response.json())
        .then(data => displayFoodItems(data.foods));

    const partyForm = document.getElementById('party-form');
    const guestForm = document.getElementById('guest-form');
    const taskForm = document.getElementById('task-form');

    const partyDetails = document.getElementById('party-details');
    const guestListItems = document.getElementById('guest-list-items');
    const taskListItems = document.getElementById('task-list-items');
    
  
    const guests = [];
    const tasks = [];

    
    partyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('party-name').value; 
        const date = document.getElementById('party-date').value;
        const time = document.getElementById('party-time').value;
        const theme = document.getElementById('party-theme').value;
        const location = document.getElementById('party-location').value;
        
        
        partyDetails.innerHTML = `<h3>${name}</h3><p>${date} at ${time}</p><p>Theme: ${theme}</p><p>Location: ${location}</p>`;
        partyForm.reset();
    });

    
    guestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const guestName = document.getElementById('guest-name').value;
        const guestEmail = document.getElementById('guest-email').value;
        const guestRSVP = document.getElementById('guest-rsvp').value;

        guests.push({ name: guestName, email: guestEmail, rsvp: guestRSVP });
        displayGuestList();
        guestForm.reset();
    });

    
    function displayGuestList() {
        guestListItems.innerHTML = '';
        guests.forEach(guest => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${guest.name} - ${guest.email} (RSVP: ${guest.rsvp})`;
            guestListItems.appendChild(listItem);
        });
    }

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskDescription = document.getElementById('task-description').value;
        const taskDueDate = document.getElementById('task-due-date').value;

        tasks.push({ description: taskDescription, dueDate: taskDueDate, status: 'Pending' });
        displayTasks();
        taskForm.reset();
    });

    
    function displayTasks() {
        taskListItems.innerHTML = '';
        tasks.map(task => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${task.description} (Due: ${task.dueDate})`;
            taskListItems.appendChild(listItem);
        });
    }

    
    function displayFoodItems(foodItems) {
        const foodItemsContainer = document.getElementById('food-items');
        foodItemsContainer.innerHTML = foodItems.map(food => `<p>${food.name} - ${food.type} (${food.quantity})</p>`).join('');
    }
});
