import api from '../../common/';

export const deleteBookRequest = (id) => {
  console.log(id, 'request id')
  api.api.default.delete(`/book/${id}`)
  .then(res => res)
}