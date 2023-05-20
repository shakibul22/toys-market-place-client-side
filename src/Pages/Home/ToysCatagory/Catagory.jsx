import { useEffect, useState } from 'react';
import SubCatagory from './SubCatagory';

const Category = () => {
  const [toys, setToys] = useState([]);
  const [textColor, setTextColor] = useState('text-start text-5xl my-9 text-purple-600 font-bold');

  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });

    const interval = setInterval(() => {
      setTextColor((prevColor) => {
        if (prevColor === 'text-start text-5xl my-9 text-purple-600 font-bold') {
          return 'text-start text-5xl my-9 text-red-600 font-bold'; // Change to red
        } else {
          return 'text-start text-5xl my-9 text-purple-600 font-bold'; // Change back to purple
        }
      });
    }, 2000);

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  const slicedToys = toys.slice(0, 3); // Extract the first 6 toys from the array

  return (
    <div className="my-8">
      <h2 className={`transition-colors duration-500 ${textColor}`}>Shop by Category:</h2>
      <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li className="w-full">
          <a
            href="#"
            className="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
            aria-current="page"
          >
            Mathematics Toys
          </a>
        </li>
        <li className="w-full">
          <a
            href="#"
            className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Science Toys
          </a>
        </li>
        <li className="w-full">
          <a
            href="#"
            className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Language Toys
          </a>
        </li>
      </ul>
      <div className="container grid grid-cols-2 md:grid-cols-3 mt-5 p-4 bg-purple-100">
        {slicedToys.map((toy) => (
          <SubCatagory toy={toy} key={toy} />
        ))}
      </div>
    </div>
  );
};

export default Category;
