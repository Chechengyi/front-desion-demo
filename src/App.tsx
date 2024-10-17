import React from 'react';

import { GoodsList } from './ui/goodsList'
import { Cart } from './ui/cart'
import { PayMethod } from './ui/payMethod'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <GoodsList />
      <Cart  />
      <PayMethod />
    </div>
  );
}

export default App;
