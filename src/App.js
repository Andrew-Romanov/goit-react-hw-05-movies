import MainContainer from './components/MainContainer';
import PageHeader from './components/PageHeader';
import Section from './components/Section';
import Navigation from './components/Navigation';

import HomePageView from './views/HomePageView';
import MoviesPageView from './views/MoviesPageView';
import MovieDetailsPageView from './views/MovieDetailsPageView';

import { Switch, Route, Redirect } from 'react-router-dom';
// import Searchbar from './components/Searchbar';
// import ImageGallery from './components/ImageGallery';
// import { useState } from 'react';

const App = () => {
  // const [searchQuery, setSearchQuery] = useState('');

  // const whenSubmit = searchQuery => {
  //   setSearchQuery(searchQuery);
  // };

  return (
    <MainContainer>
      <PageHeader title="React Homework 05. Film Finder" />
      <Section>
        <Navigation />
      </Section>

      <Section>
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
      </Section>

      {/* <Searchbar whenSubmit={whenSubmit} />

      <ImageGallery searchQuery={searchQuery}></ImageGallery> */}
    </MainContainer>
  );
};

export default App;
