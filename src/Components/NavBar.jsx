import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="flex gap-6 ">
            <NavLink className={'text-gray-400 bg-green-300 p-2 rounded-sm underline'} to={'/'}>Home</NavLink>
            <NavLink className={'text-gray-400 bg-green-300 p-2 rounded-sm underline'} to={'/favorite'}>Favorite</NavLink>
            <NavLink className={'text-gray-400 bg-green-300 p-2 rounded-sm underline'} to={'/login'}>Login</NavLink>
        </div>
    );
};

export default NavBar;