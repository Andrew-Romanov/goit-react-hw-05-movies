import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainContainer from './components/MainContainer';
import PageHeader from './components/PageHeader';
import Section from './components/Section';
import Navigation from './components/Navigation';

// import HomePageView from './views/HomePageView';
// import MoviesPageView from './views/MoviesPageView';
// import MovieDetailsPageView from './views/MovieDetailsPageView';

const HomePageView = lazy(() =>
  import(
    './views/HomePageView'
    /* webpackChunkName: "HomePageView" */
  ),
);
const MoviesPageView = lazy(() =>
  import(
    './views/MoviesPageView'
    /* webpackChunkName: "MoviesPageView" */
  ),
);
const MovieDetailsPageView = lazy(() =>
  import(
    './views/MovieDetailsPageView'
    /* webpackChunkName: "MovieDetailsPageView" */
  ),
);

const App = () => {
  return (
    <MainContainer>
      <PageHeader title="React Homework 05. Film Finder" />

      <Section>
        <Navigation />
      </Section>

      <Section>
        <Suspense fallback="Loading...">
          <Switch>
            <Route path="/" exact>
              <HomePageView />
            </Route>

            <Route path="/movies" exact>
              <MoviesPageView />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsPageView />
            </Route>

            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Section>
    </MainContainer>
  );
};

export default App;
