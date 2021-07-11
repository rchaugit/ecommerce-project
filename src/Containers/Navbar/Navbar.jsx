import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className={styles.Navbar}>
        <Link to="/"> 
          <img className={styles.Navbar__logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png"></img>
        </Link>
        <Link to="/"><p className={styles.Navbar__obj}>Home</p></Link>
        <Link to="/about"><p className={styles.Navbar__obj}>About</p></Link>
        <Link to="/contact"><p className={styles.Navbar__obj}>Contact</p></Link>
        <Link to="/checkout"><p className={styles.Navbar__obj}>Cart</p></Link>
      </nav>
    </>
  )
}

export default Navbar;