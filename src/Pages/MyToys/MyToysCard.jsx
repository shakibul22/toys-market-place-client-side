import React from 'react';

const MyToysCard = ({toy}) => {
  const { name,price,subCategory,sellerName,quantity} = toy;

    return (
        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
         {name}
        </td>
        <td className="px-6 py-4">
          {sellerName}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {subCategory}
        </td>
        <td className="px-6 py-4">
          {price}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {quantity}
        </td>
        <td className="px-6 py-4">
          <button>update</button>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {/* <!-- Modal toggle --> */}
          <a href="#" type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">view Details</a>
        </td>
      </tr>
    );
};

export default MyToysCard;