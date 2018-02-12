export function selectBook(book)
{
  console.log('Book has been selected', book.title);
  // It is an action creator so it must return an object
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}