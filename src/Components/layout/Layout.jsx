import styles from './Layout.module.css'
import Link from 'next/link'
const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href='/'>
          <h2>ICAR</h2>
          <p>Choose and bye your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        ICar project &copy;
      </footer>
    </>
  )
}

export default Layout