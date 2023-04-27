import CarsPage from "@/Components/templates/CarsPage";
import carsData from "../../../data/carsData";
const Details = () => {
    return (
        <div>
            <CarsPage data={carsData} />
        </div>
    );
}

export default Details;
