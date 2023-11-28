import Header from '../Components/Header'
import { Outlet } from "react-router-dom";
import Footer from '../Components/Footer';
const MainLayout = () => {
    return (
        <div className='max-w-[1240px] mx-auto'>
            <Header></Header>
            <div className='py-7'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;