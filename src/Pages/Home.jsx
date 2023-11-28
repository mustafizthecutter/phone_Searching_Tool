import { useLoaderData } from "react-router-dom";
import PhonesCard from './PhonesCard'
const Home = () => {
    const phones = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                phones?.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
            }
        </div>
    );
};

export default Home;