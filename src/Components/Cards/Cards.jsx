import styles from './Cards.module.scss'

const Cards = ( { product, addToCart }) => {

  return (
    <>
      <div className={styles.catalog}>
        {product.map((product) => (
          <div className={styles.catalog__product} key={product.id}>
            <img className={styles.catalog__img} src={product.img}></img>
            <p className={styles.catalog__item}>{product.item} </p>
            <p className={styles.catalog__price}>Price: ${product.price}</p>
            <button onClick = {() => 
              {addToCart({product})
              }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cards;