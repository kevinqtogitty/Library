let myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;

    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, " + hasRead
    }
}

const theHobbit = myLibrary.push(new Book('The Hobbit', 'J.R.R Tolkien', 310, 'has not been read'));
const dune = myLibrary.push(new Book('Dune', 'Frank Herbert', 412, 'has been read'));
const theStranger = myLibrary.push(new Book('The Stranger', 'Albert Camus', 159, 'has not been read'));

myLibrary.forEach(element => {
    console.log(element);
});