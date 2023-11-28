import { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Phone from './Phone';
const PhoneDetails = () => {
    const [phone, setPhone] = useState({});
    const phones = useLoaderData();
    const { id } = useParams();
    useEffect(() => {
        const findPhone = phones.find(phone => phone.id === id);
        setPhone(findPhone);
    }, [id, phones]);
    return (
        <div>
            <h1 className='text-4xl font-extrabold text-center'>Phone Details</h1>
            <div className='h-screen flex justify-center items-center'>
                {
                    <Phone phone={phone}></Phone>
                }
            </div>
        </div>

    );
};

export default PhoneDetails;