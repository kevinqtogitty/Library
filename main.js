//Stores all the books
let myLibrary = [];
let bookCounter = 0;

//This is called when the Add Book button is clicked
//Submits form info
function newBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    let hasRead = document.getElementById('hasRead').checked;

    if (hasRead === true) {
        hasRead = 'Read'
    }
    else {
        hasRead = 'Not Read'
    }

    myLibrary.push(new Book(title, author, pages, hasRead, bookCounter))
    createCard(myLibrary[bookCounter], hasRead);

    bookCounter++;
}

function Book(title, author, pages, hasRead, index) {
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
    const hasRead = document.createElement('p');
    const remove = document.createElement('button')

    newCard.className = 'card';
    title.className = 'title';
    author.className = 'author';
    pages.className = 'pages';
    remove.className = 'remove'

    title.innerText = object.title;
    author.innerText = object.author;
    pages.innerText = object.pages;
    hasRead.innerText = x;
    remove.innerText = 'Remove'

    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(hasRead);
    newCard.appendChild(remove)
    grid.appendChild(newCard);

    console.log(myLibrary[bookCounter])
    
}


// const theHobbit = myLibrary.push(new Book('The Hobbit', 'J.R.R Tolkien', 310, 'has not been read'));
// const dune = myLibrary.push(new Book('Dune', 'Frank Herbert', 412, 'has been read'));
// const theStranger = myLibrary.push(new Book('The Stranger', 'Albert Camus', 159, 'has not been read'));
