import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import CartList from './components/CartList';
import CartListLite from './components/CartListLite';
import CartTotal from './components/CartTotal';

const Cart = () => (
  <>
    <BrowserView>
      <CartList />
    </BrowserView>
    <MobileView>
      <CartListLite />
    </MobileView>
    <CartTotal />
  </>
);


export default Cart;
