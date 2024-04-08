export default function appReducer(state, action) {
  switch (action.type) {
    case "GET_BOOKS":
      return [...state, ...action.payload];
    case "ADD_BOOK":
      return [
        ...state, action.payload,
      ];
      

    case "EDIT_BOOK":
      const updatedBook = action.payload;

      const updatedBooks = state.map((book) => {
        if (book.id === updatedBook.id) {
          return updatedBook;
        }
        return book;
      });

      return {
        ...state,
        data: updatedBooks,
      };

    case "REMOVE_BOOK":
      return state.filter(
          (book) => book.id !== action.payload
        )

    default:
      return state;
  }
};