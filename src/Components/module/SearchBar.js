import styles from './SearchBar.module.css'
import carsData from '../../../data/carsData'
import { useState } from 'react'
import { useRouter } from 'next/router'
const SearchBar = () => {
    const router = useRouter()
    const [min,setMin] = useState('')
    const [max, setMax] = useState('')
    const searchHandler = () => {
        if (min && max) {
            router.push(`/fillter/${min}/${max}`)
        } else {
            alert('Please Enter minimum and maximum priced!')
        }
    }
  return (
      <div className={styles.container}>
          <div>
              <input placeholder='inter min-price' value={min} onChange={e => setMin(e.target.value)}/>
              <input placeholder='inter max-price' value={max} onChange={e => setMax(e.target.value)}/>
          </div>
          <button onClick={searchHandler}>Search</button>
      </div>
  )
}

export default SearchBar