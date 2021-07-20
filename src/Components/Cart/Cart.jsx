import styles from './Cart.module.scss';

const Cart = ({ cartItem, rmFromCart }) => {

  return (
    <>
      <div className={styles.cart}>
        <h2>Cart Items</h2>
        {cartItem.map((item) => (
          <div className={styles.cart__product} key={item.id}>
            <img className={styles.cart__product_img} src={item.product.img}></img>
            <p className={styles.cart__product_title}>Item: {item.product.item} </p>
            <p className={styles.cart__product_price}>Price:${item.product.price}</p>
            <button className={styles.cart__product_button} onClick = {() => 
              {rmFromCart(item.id)
              }}>Remove from Cart</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cart;