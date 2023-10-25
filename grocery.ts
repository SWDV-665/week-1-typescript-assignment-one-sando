class Grocery {
    name: string;
    category: string;
    quantity: number;
    pricePerUnit: number;

    constructor(name: string, quantity: number, pricePerUnit: number, category: string) {
      this.name = name;
      this.category = category;
      this.quantity = quantity;
      this.pricePerUnit = pricePerUnit;
    }
}

const groceryList: Array<Grocery> = []

function addToGroceryList(name: string, category: string, quantity: number, pricePerUnit: number): void {
    const newGroceryItem = new Grocery(name, quantity, pricePerUnit, category);
    groceryList.push(newGroceryItem);
}

function displayGroceryItem(item: Grocery): void {
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

function initializeGroceryList(): void {
    addToGroceryList('Apple', 'Fruit', 10, 0.74);
    addToGroceryList('Banana', 'Fruit', 1, 2.99);
    addToGroceryList('Grapes', 'Fruit', 1, 4.60);
    addToGroceryList('Frosted Flakes', 'Cereal', 1, 5.45);
    
    groceryList.forEach(each => {
        displayGroceryItem(each)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    // Type casting as HTMLFormElement
    const form = document.getElementById('groceryForm') as HTMLFormElement;
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const nameInput = document.getElementById('name') as HTMLInputElement;
        const categoryInput = document.getElementById('category') as HTMLInputElement;
        const quantityInput = document.getElementById('quantity') as HTMLInputElement;
        const pricePerUnitInput = document.getElementById('pricePerUnit') as HTMLInputElement;

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