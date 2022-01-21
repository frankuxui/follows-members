import styles from './Navbar.module.css'
import Link from 'next/link'
const index = () => {
  return (
    <nav className={styles.Nav}>
      <ul className={ styles.Nav}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Blogs</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default index;
