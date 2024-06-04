import { library } from "./index.js";



function displayLibrarayDom(){
    const container = document.getElementById('container');
    for (let i = 0; i < library.length; i++) {
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

        title.textContent = library[i].title;
        author.textContent = library[i].author;
        pages.textContent = `${library[i].pages} pages`;

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(hr);

        container.appendChild(book);
        
    }
    

}

export { displayLibrarayDom }
