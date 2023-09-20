import api from '../../common/';

export const getAllBooksRequest = async() => {
  const responseBooks = await api.api.default.get('/books');
  if(responseBooks) {
    return responseBooks.data;
  }
  return [];
}