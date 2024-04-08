import api from '../../common/';
export const createBookRequest = (data) => {
  api.api.default.api.post('/book', {
    data
  })
  .then(res => res)
}