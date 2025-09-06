"use client"
import { useState } from "react";

function MovieSearch() {
  // State // 
  const [movieResults, setMovieResults] = useState([])
  // Fonction // 
  async function updateMovieSerach (query) {
    const response = await fetch(`/api/movies/search?query=${query}`)
    const { results } = await response.json(); 
    console.log(results); 
    setMovieResults([]); 
  }
  return (
    <div>
       <input type="text" placeholder="Rechercher un titre ..." onChange={ e => updateMovieSerach(e.target.value)}/>
    </div>
  )
}

export default MovieSearch
