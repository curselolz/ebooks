import api from '../../common/';

export const updateBookRequest = (id, data) => {
  api.api.default.patch(`/book/${id}`, {
    data
  })
  .then(res => res)
}