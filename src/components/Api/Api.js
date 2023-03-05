import axios from 'axios';
import { Options } from 'components/SearchOptions/SearchOptions';
const apiKey = '?api_key=62c12a1369857be405b25f1458785604&language=en-US';
export const fetchMovies = async (searchQuery, searchMode) => {
  let query = '';
  switch (searchMode) {
    case Options.TRENDING: {
      query = '/trending/movie/week' + apiKey;
      break;
    }
    case Options.DETAILS: {
      query = '/movie/' + searchQuery + apiKey;
      break;
    }
    case Options.CAST: {
      query = '/movie/' + searchQuery + '/credits' + apiKey;
      break;
    }
    case Options.REVIEWS: {
      query = '/movie/' + searchQuery + '/reviews' + apiKey + '&page=1';

      break;
    }
    case Options.QUERY: {
      query =
        '/search/movie' +
        apiKey +
        '&query=' +
        searchQuery +
        '&page=1&include_adult=false';

      break;
    }

    default:
      console.log(`Wrong command`);
  }
  const response = await axios.get(query);
  return response;
};
