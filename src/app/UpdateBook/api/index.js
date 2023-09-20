import api from '../../common/';

export const updateBookRequest = (id, data) => {
  console.log(id, data, 'request')
  api.api.default.patch(`/book/${id}`, {
    data
  })
  .then(res => res)
}