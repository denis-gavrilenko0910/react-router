import { useEffect, useState } from 'react';
import { NavLink, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import * as bookShelfAPI from '../services/bookshelf-api';
import PageHeading from '../components/PageHeading/PageHeading';
import AuthorSubView from './AuthorsSubView';

const AuthorsView = () => {
  const location = useLocation();
  console.log(location);
  // const backLinkHref = location.state?.from ?? '/authors';
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthors);
  }, []);

  return (
    <>
      <PageHeading text="Authors" />
      {authors && (
        <ul>
          {authors.map((author) => {
            return (
              <li key={author.id}>
                <NavLink to={`${location.pathname}/${author.id}`}>
                  {author.name}
                </NavLink>
              </li>
            );
          })}
          <Outlet />
        </ul>
      )}
      <Routes>
        <Route
          path={`/:authorId`}
          element={authors && <AuthorSubView authors={authors} />}
        />
      </Routes>
    </>
  );
};

export default AuthorsView;
