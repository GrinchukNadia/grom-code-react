import React, { Component } from 'react';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import Contacts from './Contacts.jsx';
import Products from './Products.jsx';
import PageNotFound from './PageNotFound.jsx';

const App = () => {
  return (
    <div className='page'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/products' element={<Products />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
