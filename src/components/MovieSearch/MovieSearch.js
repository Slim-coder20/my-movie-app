"use client";
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import MovieSearchResults from "./MovieSearchResults/MovieSearchResults";
import styles from './MovieSearch.module.scss'

function MovieSearch() {
  // State //
  const [movieResults, setMovieResults] = useState([]);
  const [hasFocus, setHasFocus ] = useState(false); 
  // Fonction //
  async function updateMovieSerach(query) {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results } = await response.json();
    setMovieResults(results.filter((movie) => movie.backdrop_path));
  }
  return (
    <div className={styles.searchContainer}>
      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        onChange={(e) => updateMovieSerach(e.target.value)}
        placeholder="Rechercher un titre ..."
        onBlur={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
      />
      {movieResults.length > 0 && hasFocus && <MovieSearchResults movieResults={movieResults}/>}
    </div>
  );
}

export default MovieSearch;
