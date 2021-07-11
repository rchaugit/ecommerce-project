import styles from './Carousel.module.scss';

const Carousel = () => {
  return (
    <>
      <div className={styles.Caro}>
        <img className={styles.Caro__banner} src="https://cdn.denimandcloth.com.au/content/uploads/2014/11/18121834/adidas-banner-600x265.jpg"></img>
        <p className={styles.Caro__obj}></p>
      </div>
    </>
  )
}

export default Carousel;