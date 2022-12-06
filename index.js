
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  return fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  .then(data => renderBooks(data))
}

function renderBooks(books)