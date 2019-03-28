'use strict'

let notes = new Array();

function addItem() {
    let textbox = document.getElementById('item');
    let itemText = textbox.value;
    let totuus = false;
    textbox.value = '';
    textbox.focus();

    if (notes.length > 0) {
        for (let i = 0; i < notes.length; i++) {
            let tarkistus = notes[i].title;
            if (itemText.localeCompare(tarkistus) === 0) {
                notes[i].quantity++;
                totuus = true;
            }
        }
    }

    if (!totuus){
        let newItem = {title: itemText, quantity: 1};
        notes.push(newItem);
    }


    displayList();
    saveList();
}

function displayList() {
    let table = document.getElementById('list');
    table.innerHTML = '';
    for (let i = 0; i < notes.length; i++) {
    /*    let node = undefined;*/
        let note = notes[i];
        let node = document.createElement('tr');
        let html = '<td>' + note.title + '</td><td>' + note.quantity + '</td><td><a href="#" onClick="deleteIndex(' + i + ')">delete</td>';
        {node.innerHTML = html;}
        table.appendChild(node);
    }
}

function deleteIndex(i) {
    notes.splice(i, 1);
    displayList();
    saveList();
}

loadList();
let button = document.getElementById('add');
button.onclick = addItem;

function saveList() {
    localStorage.notes = JSON.stringify(notes);
}

function loadList() {
    console.log('loadList');
    if (localStorage.notes) {
        notes = JSON.parse(localStorage.notes);
        displayList();
    }
}
