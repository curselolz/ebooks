import api from '../../common/';

export const deleteBookRequest = (id) => {
  api.api.default.delete(`/book/${id}`)
  .then(res => res)
}