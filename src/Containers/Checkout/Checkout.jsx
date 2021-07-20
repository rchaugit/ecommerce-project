import Cart from '../../Components/Cart';
import styles from './Checkout.module.scss';

import { useState, useEffect } from 'react';
import { getCartInfo, rmFromCart } from '../../services/crud.js'


const Checkout = () => {
  const [cartItem, setCartItem] = useState([]);
  //this fetchs product data from database
  const getData = async () => {
    const data = await getCartInfo();
    console.log(data);
    setCartItem(data)
  };

  //calls getdata on first mount
  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <div className={styles.checkout}>
      <Cart cartItem={cartItem} rmFromCart={rmFromCart}/>
      </div>
    </>
  )
}

export default Checkout;