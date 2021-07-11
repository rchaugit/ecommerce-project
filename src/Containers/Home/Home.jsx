import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getProductInfo, addToCart } from '../../Services/crud.js'
import firestore from 'firebase'

import Cards from '../../Components/Cards'
import Carousel from '../Carousel/Carousel.jsx';

const Home = () => {
  const [product, setProduct] = useState([]);
  const getData = async () => {
    const data = await getProductInfo();
    console.log(data);
    setProduct(data)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Carousel />
      <Cards product={product} toCart={addToCart}/>
    </>
  )
}

export default Home;