import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Button, Modal } from 'flowbite-react';
import UpdateModal from './UpdateModal';

const MyToysCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const [control, setControl] = useState(false);

  const [allToys, setAllToys] = useState([])
  const { _id, name, price, subCategory, sellerName, quantity } = toy;
  const handleDelete = (_id) => {
    console.log('delete', _id);
    fetch(`https://toys-market-place-server.vercel.app/myToys/${_id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount > 0) {
          alert('Deleted successfully');
          const remaining = allToys.filter(toy => toy._id !== _id);
          setAllToys(remaining);
        }
      }

      )
  }



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
        {/* The button to open modal */}
        <UpdateModal id={_id}  ></UpdateModal>
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        <button onClick={() => handleDelete(_id)}>X</button>
      </td>
    </tr>
  );
};

export default MyToysCard;