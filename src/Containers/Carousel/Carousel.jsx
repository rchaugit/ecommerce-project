import styles from './Carousel.module.scss'

const Carousel = ( { product, toCart }) => {

  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.carousel__strap}>
          <div className={styles.carousel__banner}></div>
        </div>
      </div>
    </>
  )
}

export default Carousel;