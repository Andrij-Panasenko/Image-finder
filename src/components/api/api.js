import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40600754-9a7de304f3ec5f2ad2323bb7e';

export const fetchItem = async (query, page) => {
   const response = await axios.get(
     `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
   );
   return response.data;
}
