//Stores all the books
let myLibrary = [];
let bookCounter = 0;

//This is called when the Add Book button is clicked
//Submits form info
function newBook() {
    let id = document.getElementById('title').value.replaceAll(' ', '');
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    let hasRead = document.querySelector('.hasReadCheck').checked;
    console.log(hasRead)

    //check if form is empty
    if ((title || author || pages) === '') {
        alert('Fields cannot be empty!')
        return;
    }

    //Did they mark it read?
    if (hasRead === true) {
        hasRead = 'Read'
    }
    else {
        hasRead = 'Not Read'
    }

    //create a new book and push it into an array
    myLibrary.push(new Book(title, author, pages, hasRead, bookCounter, id))
    createCard(myLibrary[bookCounter], hasRead);

    console.log(myLibrary)
}

function Book(title, author, pages, hasRead, index, id) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.libIndex = index;
    
}

function createCard(object, x) {
    const grid = document.querySelector('#bookGrid');
    const newCard = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const buttonCont = document.createElement('div');
    const hasRead = document.createElement('button');
    const remove = document.createElement('button')

    newCard.setAttribute('id', object.id)
    remove.setAttribute('value', bookCounter)
    remove.setAttribute('onclick', 'removeFromLib(this.value), removeFromDom(this.parentNode.parentNode.id)')
    hasRead.setAttribute('onclick', 'changeReadStatus()')

    newCard.className = 'card';
    title.className = 'title';
    author.className = 'author';
    pages.className = 'pages';
    remove.className = 'remove';
    buttonCont.className = 'buttonCont';
    hasRead.className = 'hasRead';
    remove.className = 'removeButton';

    title.innerText = object.title;
    author.innerText = object.author;
    pages.innerText = object.pages;
    hasRead.innerText = x;
    remove.innerText = 'Remove'

    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(buttonCont);
    buttonCont.appendChild(hasRead);
    buttonCont.appendChild(remove);
    grid.appendChild(newCard);

    bookCounter++;
    document.querySelector('.form').reset();    
}

function changeReadStatus() {
    console.log('this is working')
}

function reset() {
    document.querySelector('.form').reset();
}

function removeFromLib(index) {
    myLibrary.splice(index, 1);
    bookCounter--;
    console.log(myLibrary);
}

function removeFromDom(id) {
    const domElement = document.querySelector('#' + id);
    domElement.remove();
}