import Location from '../icons/Location'
import styles from './Card.module.css'

const Card = (props) => {
    const {id, name,model,year,distance, location,image,price} = props
  return (
      <div className={styles.container}>
          <img src={image} alt={name} className={styles.image} />
          <h4 className={styles.title}>{`${name} ${model}`}</h4>
          <p className={styles.dital}>{`${year}  ${distance}`}</p>
          <div className={styles.footer}>
              <p className={styles.price}>$ {price}</p>
              <div className={styles.location}>
                  <p>{location}</p>
                  <Location/>
              </div>
          </div>
    </div>
  )
}

export default Card