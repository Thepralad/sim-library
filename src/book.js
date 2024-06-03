class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    info(){
        console.log(`${this.title} by ${this.author} has ${this.pages} pages.`)
    }
}

export {Book}
