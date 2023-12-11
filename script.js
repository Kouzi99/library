    const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
    
    
    
    
    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
      }
      

      function addBookToGrid(book, index) {
        var bookGrid = document.getElementById('bookGrid');
        var bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
          <div class="column">
          <h4>${book.title}<br></h4>
          <h5>by ${book.author}<br></h5>
          <h6>Pages: ${book.pages}<br></h6>
          <h6>Read: ${book.read ? 'Yes' : 'No'}</h6>
          <button class="btn btn-secondary" onclick="toggleRead(${index})">Read?</button>
          <button class="btn btn-danger" onclick="deleteBook(${index})">Delete Book</button>
          </div>
        `;
        dialogElem.close();
        bookGrid.appendChild(bookElement);
      }

      function addBook() {
        var title = document.getElementById('title').value;
        var author = document.getElementById('author').value;
        var pages = document.getElementById('pages').value;
        var read = document.getElementById('read').checked;

        var newBook = new Book(title, author, pages, read);
        var books = JSON.parse(localStorage.getItem('books')) || [];
        books.push(newBook);
        localStorage.setItem('books', JSON.stringify(books));

        
        renderBooks();
      }

      function deleteBook(index) {

        

        var books = JSON.parse(localStorage.getItem('books')) || [];
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));

        renderBooks();
      }

            function toggleRead(index) {
        var books = JSON.parse(localStorage.getItem('books')) || [];
        books[index].read = !books[index].read;
        localStorage.setItem('books', JSON.stringify(books));

        renderBooks();
      }

      function renderBooks() {
        var bookGrid = document.getElementById('bookGrid');
        bookGrid.innerHTML = '';

        var books = JSON.parse(localStorage.getItem('books')) || [];
        books.forEach(function(book, index) {
          addBookToGrid(book, index);
        });
      }


      

      // Initial rendering from local storage
      renderBooks();

