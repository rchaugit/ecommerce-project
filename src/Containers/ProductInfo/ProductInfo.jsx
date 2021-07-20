import styles from './ProductInfo.module.scss';
import { useState, useEffect } from 'react';
import { getProductInfo } from '../../services/crud.js';
import { useParams } from 'react-router-dom';

const ProductInfo = () => {
  const { id } = useParams()
  const idStr = `${id}`;

   //product is an array of all our products
  const [item, setItem] = useState([]);
  const getIndivItem = async () => {
    const data = await getProductInfo();
    console.log(data);
    const item = data.filter((data) => data.id === idStr)
    setItem(item);
    //product array needs to be filtered by our idStr
  }; 

  // calls getdata on first mount
  useEffect(() => {
    getIndivItem();
    console.log(item);
  }, []);

  // const filtered = product.filter(id => id === idStr);


  return (
    <>
      <div className={styles.productinfo}>
        <h2>Product Info: {id} </h2>
        <h2> {item.img} </h2>
      </div>
    </>
  )
}

export default ProductInfo;