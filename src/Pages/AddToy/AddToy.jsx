import React, { useState } from 'react';

const AddToy = () => {
  const [pictureUrl, setPictureUrl] = useState('');
  const [name, setName] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the submit logic here, e.g., send the form data to the server
    // You can access the form values using the state variables

    // Reset the form
    setPictureUrl('');
    setName('');
    setSellerName('');
    setSellerEmail('');
    setSubCategory('');
    setPrice('');
    setRating('');
    setQuantity('');
    setDescription('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add A Toy</h1>
      <form onSubmit={handleSubmit} className=" mx-auto grid grid-cols-2 gap-3">
        <div className="mb-4">
          <label htmlFor="pictureUrl" className="block mb-1">
            Picture URL of the toy:
          </label>
          <input
            type="text"
            id="pictureUrl"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerName" className="block mb-1">
            Seller Name:
          </label>
          <input
            type="text"
            id="sellerName"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerEmail" className="block mb-1">
            Seller Email:
          </label>
          <input
            type="email"
            id="sellerEmail"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={sellerEmail}
            onChange={(e) => setSellerEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subCategory" className="block mb-1">
            Sub-category:
          </label>
          <input
            type="text"
            id="subCategory"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-1">
            Price:
          </label>
          <input
            type="number"
            id="price"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block mb-1">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block mb-1">
            Available quantity:
          </label>
          <input
            type="number"
            id="quantity"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">
            Detail description:
          </label>
          <textarea
            id="description"
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white  rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddToy;
