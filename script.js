const changeTextButton = document.getElementById("change-text-btn");
const introText = document.getElementById("intro-text");

changeTextButton.addEventListener("click", function() {
  introText.textContent = "The text has been changed dynamically!";
  introText.style.color = "blue";  
});


const addItemButton = document.getElementById("add-item-btn");
const itemList = document.getElementById("item-list");

addItemButton.addEventListener("click", function() {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  itemList.appendChild(newItem);
});


const removeItemButton = document.getElementById("remove-item-btn");

removeItemButton.addEventListener("click", function() {
  const lastItem = itemList.lastElementChild;
  if (lastItem) {
    itemList.removeChild(lastItem);
  }
});
