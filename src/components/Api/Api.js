import axios from 'axios';

export const fetchMovies = async (searchQuery, searchMode) => {
  let query = '';
  if (searchMode === 'trending') {
    query = '/trending/get-trending';
  }
  const response = await axios.get(query);
  return response;
};
