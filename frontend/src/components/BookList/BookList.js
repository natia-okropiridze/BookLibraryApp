import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../redux/books/actionCreators";
import "./BookList.css";
const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    if (window.confirm("Are You Sure  to Delete?")) {
      dispatch(deleteBook(id));
    }
  };
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No Books available</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={book.id}>
              <div className="book-info">
                {++index}. {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default BookList;
