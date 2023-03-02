import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchMovies } from './Api/Api';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/';

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleMoviesRequest = async (searchQuery, pageNr) => {
    setIsLoading(true);
    try {
      const fetchData = await fetchMovies(searchQuery, pageNr);
      const { response } = fetchData;

      setTrendingMovies(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleMoviesRequest('', 'trending');
  });
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
