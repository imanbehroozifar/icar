import { useRouter } from "next/router"
import carsData from "../../../data/carsData"
import CarsList from "@/Components/templates/CarsList"
useRouter
carsData
const FillterCar = () => {
    const router = useRouter()
    const [min, max] = router.query.slug || [];
    const fillterdData = carsData.filter(item => item.price > min && item.price < max)
    if (!fillterdData.length) return <h3>Not Found Car</h3>
    return <CarsList data={fillterdData} />

}

export default FillterCar