import React, { useContext, useState } from "react";
import Title from "../Title/Title";
import { Button, Table } from "flowbite-react";
import { useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import MyToysCard from "./MyToysCard";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, [user]);
  console.log(allToys);

  

 

  return (
    <div  >
        <Title title="My Toys-Kid's Zone"></Title>
      <div className="my-Toys-container p-2 md:p-6" style={{ backgroundImage: "url('https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <h1 className="text-center  text-5xl font-serif my-7 p-4 ">ALL My Toys</h1>
     
         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        

        <Table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Seller Name
              </th>
              <th scope="col" className="px-6 py-3">
                Sub Category
              </th>
              <th scope="col" className="px-6 py-3">
               price
              </th>
              <th scope="col" className="px-6 py-3">
               Quantity
              </th>
              <th scope="col" className="px-6 py-3">
              Update
              </th>
              
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              allToys.map((toy)=><MyToysCard toy={toy} key={toy._id}></MyToysCard>)
            }
         
         
          </tbody>
        </Table>
      </div>
    </div>
    </div>
  );
};

export default MyToys;
