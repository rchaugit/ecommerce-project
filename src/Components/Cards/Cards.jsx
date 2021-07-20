import styles from './Cards.module.scss'
import { getProductInfo, addToCart } from '../../services/crud.js'
import { Link } from 'react-router-dom'

const Cards = ({ product, addToCart }) => {

  return (
    <>
      <div className={styles.catalog}>
        {product.map((product) => ( //map of product catalog creating a card for each entry
          <div className={styles.catalog__product} key={product.id}>
            <Link to={`/product/${product.id}`}>
            <img className={styles.catalog__product_img} src={product.img}></img>
            <p className={styles.catalog__product_item}>{product.item} </p>
            </Link>
            <p className={styles.catalog__product_price}>Price: ${product.price}</p>
            <button className={styles.catalog__product_btn} onClick = {() => 
              {addToCart({product})
              }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cards;