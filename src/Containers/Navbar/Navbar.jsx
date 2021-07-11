import styles from './Navbar.module.scss'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.navbar__logo} src="https://i0.wp.com/www.logotaglines.com/wp-content/uploads/2016/08/td-amazon-smile-logo-01-large.jpg?fit=960%2C780&ssl=1"></img>
      <input className={styles.navbar__search} type="search"></input>
      <p className={styles.navbar__obj}>Home</p>
      <p className={styles.navbar__obj}>Cart</p>
      <p className={styles.navbar__obj}>About</p>
    </nav>
  )
}

export default Navbar;