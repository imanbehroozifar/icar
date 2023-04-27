import { useRouter } from 'next/router'
import styles from './CarsList.module.css'
import Back from '../icons/Back'
import Card from '../module/Card'
const CarsList = ({ data }) => {
  const router = useRouter()
  const backHndler = () => {
    router.back();
  }
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHndler}>
        <Back />
        <p>Back</p>
      </div>
      <div className={styles.cards}>
        {
          data.map(item => (
            <Card key={item.id} {...item} />
          ))
        }
      </div>
    </div>
  )
}

export default CarsList