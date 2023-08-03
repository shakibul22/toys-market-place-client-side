import { useEffect, useState } from 'react';
import './Catagory.css'
import SubCatagory from './SubCatagory';
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Category = () => {
  const [toys, setToys] = useState([]);

  const [activeTab,setActiveTab]=useState('Mathematics Toys')

  useEffect(() => {
    fetch(`https://toys-market-place-server.vercel.app/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      },);


  },[activeTab]);

  const slicedToys = toys.slice(0, 3); // Extract the first 4 toys from the array
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="my-10 md:my-20">
      <h2 className='text-orange-500'>Shop by Category:</h2>
      <Tabs>
    <TabList className="flex justify-center ">
      <Tab   className={`tab  tab2 mathematics-toys ${
              activeTab == "Mathematics Toys" ? "" : ""
            }`}  onClick={() =>handleTabClick("Mathematics Toys")}>Mathematics Toys</Tab>
      <Tab className={`tab  tab2 science-toys ${
              activeTab == "Science Toys" ? " " : ""
            }`}  onClick={() => handleTabClick("Science Toys")}>Science Toys</Tab>
      <Tab   className={`tab  tab2 language-toys ${
              activeTab == "Language Toys" ? "" : ""
            }`} onClick={() => handleTabClick("Language Toys")}>Language Toys</Tab>
    </TabList>

    <TabPanel>
    <div className="container grid grid-cols-1 md:grid-cols-3 mt-5 p-4 bg-purple-100">
        {slicedToys.map((toy) => (
          <SubCatagory toy={toy} key={toy._id}></SubCatagory>
        ))}
      </div>
    </TabPanel>
    <TabPanel>
    <div className="container grid grid-cols-1 md:grid-cols-3 mt-5 p-4 bg-purple-100">
        {slicedToys.map((toy) => (
          <SubCatagory toy={toy} key={toy._id}></SubCatagory>
        ))}
      </div>
    </TabPanel>
    <TabPanel>
    <div className="container grid grid-cols-1 md:grid-cols-3 mt-5 p-4 bg-purple-100">
        {slicedToys.map((toy) => (
          <SubCatagory toy={toy} key={toy._id}></SubCatagory>
        ))}
      </div>
    </TabPanel>
  </Tabs>

    </div>
  );
};

export default Category;
