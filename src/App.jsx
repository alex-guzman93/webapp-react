import { useState } from 'react';
//import axios from 'axios';
import './App.css'
import TheFlicksHome from './pages/TheFlicksHome'
import { Routes, Route } from 'react-router-dom'
import Flick from './components/Flick';

const filmsRawData = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Science Fiction",
    release_year: 2010,
    abstract: "A skilled thief is given a chance at redemption if he can successfully perform inception.",
    image: "inception.jpg",
    created_at: "2024-11-29T10:40:13.000Z",
    updated_at: "2025-05-22T10:55:27.000Z"
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    genre: "Crime",
    release_year: 1972,
    abstract: "The story of a powerful Italian-American crime family and their struggles.",
    image: "interstellar.jpg",
    created_at: "2024-11-29T10:40:13.000Z",
    updated_at: "2025-05-22T10:55:27.000Z"
  }]




function App() {

  const [flicks, setFlicks] = useState(filmsRawData)


  return (
    <>
      <Routes >

        <Route index element={<TheFlicksHome flicks={flicks} />} />
        <Route path={'flicks/:id'} element={<Flick flicks={flicks} />} />

      </Routes>
    </>
  )
}

export default App
