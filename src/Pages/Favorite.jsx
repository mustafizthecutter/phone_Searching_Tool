import { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";
import Swal from 'sweetalert2';

const Favorite = () => {
    const [favorite, setFavorite] = useState([]);

    const [noData, setNoData] = useState(false);

    const [isShow, setIsShow] = useState(false);

    const [price, setPrice] = useState(0);

    useEffect(() => {
        const favoritePhone = JSON.parse(localStorage.getItem('favorite'));
        if (favoritePhone) {
            setFavorite(favoritePhone);
            const itemsPrice = favoritePhone.reduce((previous, current) => previous + current.price, 0);
            setPrice(itemsPrice);
        }
        else {
            setNoData('No Data Found!!!!!!!!');
        }
    }, []);


    const handleDeleteFavorite = () => {
        localStorage.clear();
        setFavorite([]);
        Swal.fire("All Items Deleted");
        setNoData('No Data Found!!!!!!!!');
    };


    return (
        <div>
            {
                noData ? <p className="text-4xl font bold h-screen flex justify-center items-center">{noData}</p> :
                    <div>
                        {favorite.length > 0 && <button onClick={handleDeleteFavorite} className="block mx-auto bg-green-300 p-2 mb-4">Delete Favorite Phone</button>}
                        <p className="block text-center mx-auto bg-green-300 p-2 mb-4">Total Favorites Items Price:{price}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                            {
                                isShow ? favorite?.map(phone => <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>)
                                    :
                                    favorite?.slice(0, 4).map(phone => <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>)
                            }

                        </div>

                        {
                            favorite.length > 4 && <button onClick={() => setIsShow(!isShow)} className="block mx-auto bg-green-300 p-2">{isShow ? 'See Less' : 'See More'}</button>
                        }

                    </div>
            }
        </div>


    );
};

export default Favorite;