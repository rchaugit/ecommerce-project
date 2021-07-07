import styles from './Cards.module.scss'

const Cards = ( { product, toCart }) => {

  return (
    <>
      <div className={styles.catalog}>
        {product.map((product) => (
          <div className={styles.catalog__product} key={product.id}>
            <img className={styles.catalog__img} src={product.img}></img>
            <p>Item: {product.item} </p>
            <p>Price: {product.Price}</p>
            <button onClick={toCart}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cards;
