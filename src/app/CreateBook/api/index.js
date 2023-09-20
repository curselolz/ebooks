import api from '../../common/';

export const createBookRequest = (data) => {
  api.api.default.post('/book', {
    data
  })
  .then(res => res)
}