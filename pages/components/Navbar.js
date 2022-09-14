import styles from '../../styles/navbar.module.css'
// import { menuItems } from './MenuItems';
import Link from 'next/link'

const Navbar = () => {

    const menuItems = [
        {
          title: 'Home',
          url: '/',
        },
        {
          title: 'Services',
          url: '/services',
          submenu: [
            {
              title: 'web design',
              url: 'web-design',
            },
            {
              title: 'web development',
              url: 'web-dev',
            },
            {
              title: 'SEO',
              url: 'seo',
            },
          ],
        },
        {
          title: 'About',
          url: '/about',
        },
      ];


  return (
    <nav>
      <ul className={styles.menus}>
        {menuItems.map((menu, index) => {
          return (
            <li className={styles.menuItems} key={index}>
              <Link href={menu.url}><a >{menu.title}</a></Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;