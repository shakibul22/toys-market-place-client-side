import { useEffect, useState } from 'react';
import ToyCard from './ToyCard';
import Title from '../Title/Title';
import { Link } from 'react-router-dom';
import { Table } from 'flowbite-react';

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allToys')
      .then(res => res.json())
      .then(data => setAllToys(data))
  }, []);

   // const handleSearch = () => {
  //   fetch(`http://localhost:5000/getToysByText/${searchText}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setToys(data);
  //     });
  // };
  console.log(allToys);

  return (
    <div className='p-3 ' style={{ backgroundImage: "url('https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }} >
      <Title title="Blogs-Kid's Zone"></Title>

      <div className="text-center mt-4 ">
        <h2 className="text-orange-500 text-3xl font-bold mb-4">Our All Toys</h2>
        <p className="p-3">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      </div>
      <div className="search-box p-2 text-center">
          <input type="text" className="p-1" /> <button className="shadow-xl bg-stone-500 px-3 py-1.5 rounded-md text-white">Search</button>
          </div>

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
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              allToys.map((toy)=><ToyCard toy={toy} key={toy._id}></ToyCard>)
            }
       
          </tbody>
        </Table>
        {/* <!-- Edit user modal --> */}
        <div id="editUserModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <form action="#" className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Edit user
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="editUserModal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label for="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input type="text" name="first-name" id="first-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" required="" />
                  </div>

                </div>
              </div>
              {/* <!-- Modal footer --> */}
              {/* <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save all</button>
                </div> */}
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AllToys;