import LoginPage from '../LoginPage/LoginPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import NavBar from '../NavBar/NavBar';
import ActorListPage from '../ActorListPage/ActorListPage';
import MovieListPage from '../MovieListPage/MovieListPage';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [user, setUser] = useState(null)
  
  
  return (
    <main className="App">
      {user ?
      <>
      <NavBar />
    <Routes >
      <Route path="/" element={<MovieListPage />}/>
      <Route path="/movies/:movieName" element={<MovieDetailPage />}/>
     <Route path="/actors" element={<ActorListPage />}/>
    </Routes>
    </> : <LoginPage setUser={setUser}/>} 

    </main>
      
  );
}

export default App;
