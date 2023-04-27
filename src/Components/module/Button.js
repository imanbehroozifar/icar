import Link from 'next/link'
import styles from './Button.module.css'

const Button = () => {
    return (
        <div className={styles.container}>
            <Link href='/cars'>
            See All Cars
            </Link>
        </div>
    )
}

export default Button