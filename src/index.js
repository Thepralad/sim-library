import { Book } from "./book";
import { displayLibrarayDom } from "./dom";
let library = new Array();

function addBookToDom(){
    const _title = document.getElementById('title');
    const _author = document.getElementById('author');
    const _pages = document.getElementById('pages');

    document.getElementById('add').addEventListener('click', function(){
        addBook(_title.value, _author.value, _pages.value);
        _title.value = '';
        _author.value = '';
        _pages.value = '';
        
    })
}

function addBook(_title, _author, _pages){
    const newBook = new Book(_title, _author, _pages);
    library.push(newBook);
    console.table(library);
    
        
        //creating elements.
        const book = document.createElement('div');
        const title = document.createElement('h3');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const hr = document.createElement('hr');
        //adding class to elements.
        title.classList.add('title');
        author.classList.add('author');
        pages.classList.add('pages');
        book.classList.add('book');

        title.textContent = _title;
        author.textContent = _author;
        pages.textContent = `${_pages} pages`;

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(hr);

        container.appendChild(book);
       
        
    
}


addBookToDom();
displayLibrarayDom();
export { library };

// function addBookToDom(){
//     const _title = document.getElementById('title');
//     const _author = document.getElementById('author');
//     const _pages = document.getElementById('pages');

//     document.getElementById('add').addEventListener('click', function(){
//         addBook(_title.value, _author.value, _pages.value);
//         _title.value = '';
//         _author.value = '';
//         _pages.value = '';
//         console.log('this works')
//     })
// }

// function addBook(title, author, pages) {
//     // Create a new book element
//     const book = document.createElement('div');
//     book.textContent = `Title: ${title}, Author: ${author}, Pages: ${pages}`;

//     // Append the book to the container
//     const container = document.getElementById('container');
//     if (container) {
//         container.appendChild(book);
//     } else {
//         console.error('Container element not found in the DOM');
//     }
// }
;
