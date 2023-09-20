import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import App from "./App";
import CreateBook from "./CreateBook";
import UpdateBook from "./UpdateBook";
import DeleteBook from "./DeleteBook";
import DataProvider from './common/store/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<CreateBook />} />
        <Route path="update" element={<UpdateBook />} />
        <Route path="delete" element={<DeleteBook />} />
      </Routes>
    </BrowserRouter>
  </DataProvider>
);
