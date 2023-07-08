import { Route, Routes } from 'react-router-dom';
import { Container } from './components/Container/Container';
import { AppBar } from './components/AppBar/AppBar';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import NotFoundView from './views/NotFoundView';
import BookDetailsView from './views/BookDetailsView';
import AuthorSubView from './views/AuthorsSubView';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<HomeView />} />
        <Route path="/authors/*" element={<AuthorsView />}></Route>
        {/* <Route path="/authors/:authorId" element={<AuthorSubView />} /> */}
        <Route path="authorId" element={<AuthorSubView />} />
        <Route path="/books" element={<BooksView />} />
        <Route path="/books/:bookId" element={<BookDetailsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Container>
  );
};
