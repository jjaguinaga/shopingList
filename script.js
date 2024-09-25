const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
   e.preventDefault();
   const newItem = itemInput.value

   if(newItem === '') {
      alert('Please add an item');
      return;
   }

   // create a new item for list
   const li = document.createElement('li');
   li.appendChild(document.createTextNode(newItem));

   const button = createButton('remove-item btn-link text-red');
   li.appendChild(button);
   itemList.appendChild(li);
   itemInput.value = '';
}
// once the button and icon are created from the two functions below
// you need to append them to the list to show on the DOM

function createButton(classes) {
   const button = document.createElement('button');
   button.className = classes;
   const icon = createIcon('fa-solid fa-xmark');
   button.appendChild(icon);
   return button;
}
// this function is used to make the button for the new item list
// the icon function is used here to add in the icon

function createIcon(classes) {
   const icon = document.createElement('i');
   icon.className = classes;
   return icon;
}
// made this function to create the icon for the button
// then we add it inside the function for the button

itemForm.addEventListener('submit', addItem);
