import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import App from "./App";
import SignUp from "./Welcome/SignUp";
import SignIn from "./Welcome/SignIn";
import CreateBook from "./CreateBook";
import DataProvider from './common/store/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/forgot-password" element={<SignIn />} />
        <Route path="/create" element={<CreateBook />} />
        <Route path="/profile" element={<CreateBook />} />
      </Routes>
    </BrowserRouter>
  </DataProvider>
);
