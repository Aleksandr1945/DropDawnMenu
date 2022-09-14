import Navbar from './Navbar';
import styles from '../../styles/navbar.module.css'

const Header = () => {
  return (
    <header>
      <div className={styles.navArea}>
        <a href="/" className="logo">
          Logo
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;