import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import * as bookShelfAPI from '../services/bookshelf-api';
import PageHeading from '../components/PageHeading/PageHeading';

const BooksView = () => {
  const location = useLocation();
  const [books, setBooks] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchBooks().then(setBooks);
  }, []);

  return (
    <>
      <PageHeading text="Books" />
      {books && (
        <ul>
          {books.map((book) => {
            return (
              <li key={book.id}>
                <Link to={`${location.pathname}/${book.id}`}>{book.title}</Link>
              </li>
            );
          })}
          <Outlet />
        </ul>
      )}
    </>
  );
};
export default BooksView;
