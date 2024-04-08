import React, { createContext, useEffect, useState, useReducer } from 'react';
import { getAllBooksRequest } from '../../ReadBook/api';
import appReducer from './DataReducer';

const initialState = [  {
    "id": 1,
    "_id": 1,
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  }];

export const GlobalContext = createContext(initialState);

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const getBooks = (data) => {
    dispatch({
      type: "GET_BOOKS",
      payload: data
    });
  };

  const addBook = (data) => {
    dispatch({
      type: "ADD_BOOK",
      payload: {
        ...data,
        id: Math.floor(Math.random() * (100 - 1 + 1) + 1)
      }
    });
  };

  const editBook = (data) => {
    dispatch({
      type: "EDIT_BOOK",
      payload: data
    });
  };

  const removeBook = (id) => {
    dispatch({
      type: "REMOVE_BOOK",
      payload: id
    });
  };

  useEffect(() => {
    async function fetchData() {
      let dataBooks = [];
      try {
        dataBooks = await getAllBooksRequest();
        getBooks(dataBooks)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      return dataBooks;
    }
    fetchData()

  }, []);

  return (
    <GlobalContext.Provider
      value={{
        data: state,
        addBook,
        editBook,
        removeBook,
        getBooks
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


export default DataProvider