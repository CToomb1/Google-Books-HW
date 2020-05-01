import axios from 'axios';

export const getSavedBooks = function () {
  return axios.get('/api/books');
};
export const saveBook = function (bookData) {
  return axios.post('/api/books', bookData);
};
export const deleteBook = function (bookId) {
  return axios.delete(`/api/books/${bookId}`);
};


// https://www.googleapis.com/books/v1/volumes?q=hunger+games
export const searchGoogleBooks = function (query) {
  return axios.get('https://www.googleapis.com/books/v1/volumes', { params: { q: query } });
};