import NavBar from '../Components/NavBar'
import Logo from '../Components/Logo'
const Header = () => {
    return (
        <div className='flex justify-between py-7 shadow-md px-2'>
            <Logo></Logo>
            <NavBar></NavBar>
        </div>
    );
};

export default Header;