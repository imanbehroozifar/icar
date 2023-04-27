import CarsPage from "@/Components/templates/CarsPage";
import carsData from "../../../data/carsData";
import Categories from "@/Components/module/Categories";
import SearchBar from "@/Components/module/SearchBar";
const Details = () => {
    return (
        <div>
            <SearchBar/>
            <Categories/>
            <CarsPage data={carsData} />
        </div>
    );
}

export default Details;
