import { useState, useEffect } from 'react';
import { getProductInfo, addToCart } from '../../services/crud.js'
import styles from './Home.module.scss';

import Cards from '../../Components/Cards'
import Carousel from '../Carousel/Carousel.jsx';

const Home = () => {
  const [product, setProduct] = useState([]);
  //this fetchs product data from database
  const getData = async () => {
    const data = await getProductInfo();
    console.log(data);
    setProduct(data)
  };

  //calls getdata on first mount
  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <div className={styles.caro}>
        <Carousel />
      </div>
      <div className={styles.grid}>
        <Cards product={product} addToCart={addToCart}/>
      </div>
    </>
  )
}

export default Home;