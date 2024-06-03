import { Book } from "./book";

let library = new Array();

function addBook(title, author, pages){
    const newBook = new Book(title,author,pages)
    library.push(newBook);
}

function displayBooks(){
    console.table(library);
}
addBook('How to solve it', 'George Polya', 140);
addBook('Hyper Focus', 'James Author', 563);
displayBooks();

export { library };
