"use strict";
class Grocery {
    constructor(name, quantity, pricePerUnit, category) {
        this.name = name;
        this.category = category;
        this.quantity = quantity;
        this.pricePerUnit = pricePerUnit;
    }
}
const groceryList = [];
function addToGroceryList(name, category, quantity, pricePerUnit) {
    const newGroceryItem = new Grocery(name, quantity, pricePerUnit, category);
    groceryList.push(newGroceryItem);
}
function displayGroceryItem(item) {
    const outputDiv = document.getElementById('tableBody');
    if (outputDiv) {
        outputDiv.innerHTML += `
<td>${item.name}</td>
<td>${item.category}</td>
<td>${item.quantity}</td>
<td>${item.pricePerUnit}</td>
`;
    }
}
function initializeGroceryList() {
    addToGroceryList('Apple', 'Fruit', 10, 0.74);
    addToGroceryList('Banana', 'Fruit', 1, 2.99);
    addToGroceryList('Grapes', 'Fruit', 1, 4.60);
    addToGroceryList('Frosted Flakes', 'Cereal', 1, 5.45);
    groceryList.forEach(each => {
        displayGroceryItem(each);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    // Type casting as HTMLFormElement
    const form = document.getElementById('groceryForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const categoryInput = document.getElementById('category');
        const quantityInput = document.getElementById('quantity');
        const pricePerUnitInput = document.getElementById('pricePerUnit');
        const name = nameInput.value;
        const category = categoryInput.value;
        const quantity = parseInt(quantityInput.value, 10);
        const pricePerUnit = parseFloat(pricePerUnitInput.value);
        // pushing to list, for future functionality
        addToGroceryList(name, category, quantity, pricePerUnit);
        // grabbing last item
        const newItem = groceryList[groceryList.length - 1];
        // concat to td
        displayGroceryItem(newItem);
        form.reset();
    });
});
window.onload = initializeGroceryList;
