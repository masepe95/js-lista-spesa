// Recupero l'elemento dal DOM
const listContainer = document.getElementById('list');

// Creo una shopping list
const shoppingList = ['Pane', 'Pasta', 'Bibite', 'Carne', 'Surgelati', 'Detersivo', 'Verdura'];

// ! FOR METHOD

// listItems = `<ul>`

// for (let i = 0; i < shoppingList.length; i++){
//     listItems += `<li>${shoppingList[i]}</li>`
// }

// listItems += `</ul>`
// listContainer.innerHTML = listItems;


// ! WHILE METHOD

let listItems = `<ul class="list-group w-25">`

let i = 0;

while (i < shoppingList.length) {
    listItems += `<li class="list-group-item">${shoppingList[i]}</li>`;
    i++
}

listItems += `</ul>`
listContainer.innerHTML = listItems;