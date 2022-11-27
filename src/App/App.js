import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { movies } from '../data';

import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../NavBar/NavBar';
import ActorListPage from '../ActorListPage/ActorListPage';
import MovieListPage from '../MovieListPage/MovieListPage';



function App() {
  const [user, setUser] = useState(null)


  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} />
          <Routes >
            <Route path="/" element={<MovieListPage movies={movies} />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />} />
            <Route path="/actors" element={<ActorListPage movies={movies} />} />
          </Routes>
        </> : <LoginPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
