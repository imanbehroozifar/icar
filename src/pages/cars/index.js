import CarsPage from "@/Components/templates/CarsPage";
import carsData from "../../../data/carsData";
import Categories from "@/Components/module/Categories";
const Details = () => {
    return (
        <div>
            <Categories/>
            <CarsPage data={carsData} />
        </div>
    );
}

export default Details;
