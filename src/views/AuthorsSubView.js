import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import BooksView from './BooksView';

export default function AuthorSubView({ authors }) {
  const { authorId } = useParams();

  const author = authors.find((author) => {
    return author.id === Number(authorId);
  });
  return (
    <>
      <h2>{author.name}</h2>
      <ul>
        {author.books.map((book) => {
          return (
            <li key={book.id}>
              <NavLink to={`/books/${book.id}`}>{book.title}</NavLink>
            </li>
          );
        })}
      </ul>
      <Routes>
        <Route path={`/books/:bookId`} element={<BooksView />} />
      </Routes>
    </>
  );
}
