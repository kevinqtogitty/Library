function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;

    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, " + hasRead
    }
}

console.log(Book.info);