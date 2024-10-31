let itemCounter = 1;

document.getElementById('addItemButton').addEventListener('click', adicionarItem);

document.getElementById('itemInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarItem();
    }
});

function adicionarItem() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();

    if (itemText !== "") {
        const itemList = document.getElementById('itemList');
        const listItem = document.createElement('li');
        listItem.textContent = `${itemCounter}. ${itemText}`;
        itemList.appendChild(listItem);
        
        itemInput.value = ""; 
        itemCounter++; 
    } 
}