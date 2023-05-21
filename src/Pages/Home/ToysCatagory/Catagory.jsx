import { useEffect, useState } from 'react';
import './Catagory.css'
import SubCatagory from '../SubCatagory/SubCatagory';
const Category = () => {
  const [toys, setToys] = useState([]);
  const [textColor, setTextColor] = useState('text-start text-5xl my-9 text-purple-600 font-bold');
  const [activeTab,setActiveTab]=useState('Mathematics Toys')

  useEffect(() => {
    fetch(`http://localhost:5000/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      },);

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
  },[activeTab]);

  const slicedToys = toys.slice(0, 3); // Extract the first 4 toys from the array
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="my-10 md:my-20">
      <h2 className={`transition-colors duration-500 ${textColor}`}>Shop by Category:</h2>
     
      <div className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        <div className="w-full">
          <div
            className={`tab  tab2 mathematics-toys ${
              activeTab == "Mathematics Toys" ? " bg-blue-400 text-orange-500" : ""
            }`}  onClick={() =>handleTabClick("Mathematics Toys")}>
              Mathematics Toys
          </div>
        </div>
      
        <div className="w-full">
          <div
            className={`tab  tab2 science-toys ${
              activeTab == "Science Toys" ? " bg-blue-400 text-orange-500 " : ""
            }`}  onClick={() => handleTabClick("Science Toys")}
              
          >
            Science Toys
          </div>
        </div>
        <div className="w-full">
          <button
            className={`tab  tab2 language-toys ${
              activeTab == "Language Toys" ? " bg-blue-400 h-5 text-orange-500" : ""
            }`} onClick={() => handleTabClick("Language Toys")}
          >
            Language Toys
          </button>
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 mt-5 p-4 bg-purple-100">
        {slicedToys.map((toy) => (
          <SubCatagory toy={toy} key={toy._id} />
        ))}
      </div>
    </div>
  );
};

export default Category;
