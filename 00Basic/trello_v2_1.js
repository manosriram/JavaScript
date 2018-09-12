let result;

let library = {
    booksCount:50,
    finished:25.
}

let addBooks = function(book,cnt=0) {
    library.booksCount = library.booksCount + cnt;
}

let resetFinished = function(book) {
    library.finished = 25;    
}

let removeBooks = function(book,cnt) {
    library.booksCount = library.booksCount - cnt;
}

let bookSummary = function(book) {
    return "You currently have "+ (library.booksCount) + " and you have finished " + (library.finished) + " books.."
    
}

let addFinished = function(book,cnt) {
    library.finished = library.finished + cnt;
}

addBooks(library,10);
removeBooks(library,5);
addFinished(library,10);
result = bookSummary(library);


console.log(result);