import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ToyCard = ({ toy }) => {
  const {_id, name,price,subCategory,sellerName,quantity} = toy;
  return (
    
      <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

        <td className="px-6 py-4">
         {name}
        </td>
        <td className="px-6 py-4">
          {sellerName}
        </td>
        <td className="px-6 py-4">
          {subCategory}
        </td>
        <td className="px-6 py-4">
          {price}
        </td>
        <td className="px-6 py-4">
          {quantity}
        </td>
        <td className="px-6 py-4">
        <Link to={`/toyDetails/${_id}`}>
            <button className='btn btn-info'>View Details</button>
          </Link>
        </td>
      </tr>
   
  );
};

export default ToyCard;