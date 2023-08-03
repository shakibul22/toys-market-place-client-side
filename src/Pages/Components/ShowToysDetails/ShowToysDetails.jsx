import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';


const ShowToysDetails = () => {
    const {id}=useParams();

    const [item, setItem] = useState('');
  
    useEffect(() => {
      
      fetch(`https://toys-market-place-server.vercel.app/toyDetails/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setItem(data)
        });
    }, );
    // const { pictureUrl, name, sellerName, sellerEmail, price, rating, availableQuantity, detailDescription } = toyInfo;
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <img src={item.pictureUrl} className="max-w-xl rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Toy Name: {item.name}</h1>
                    <p className="text-lg mt-4">Seller Name: {item.sellerName}</p>
                    <p className="text-lg mt-4">Seller Email: {item.sellerEmail}</p>
                    <p className="text-lg mt-4">Price: {item.price}</p>
                    <p className="text-lg mt-4">Rating: {item.rating}</p>
                    <p className="text-lg mt-4">Available Quantity: {item.availableQuantity}</p>
                    <p className="text-lg mt-4">Description: {item.detailDescription}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ShowToysDetails;