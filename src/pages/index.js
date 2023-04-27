import SearchBar from "@/Components/module/SearchBar"
import carsData from "../../data/carsData"
import Categories from "@/Components/module/Categories"
import CarsPage from "@/Components/templates/CarsPage"
import Button from "@/Components/module/Button"


function Index() {
  const cars = carsData.slice(0, 3)
  return (
    <div>
      <SearchBar />
      <Categories />
      <Button/>
      <CarsPage data={cars} />
    </div>
  )
}

export default Index
