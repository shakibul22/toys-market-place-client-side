import { useEffect, useState } from 'react';
import ToyCard from './ToyCard';
import Title from '../Title/Title';
import { Link } from 'react-router-dom';
import { Table } from 'flowbite-react';

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText,setSearchText]=useState('')

  useEffect(() => {
    fetch('https://toys-market-place-server.vercel.app/allToys')
      .then(res => res.json())
      .then(data => setAllToys(data))
  }, []);




const selectSortType = (e) =>{
    fetch(`https://toys-market-place-server.vercel.app/${e.target.value}`)
      .then(res => res.json())
      .then(data => setAllToys(data))
}


   const handleSearch = () => {
    fetch(`https://toys-market-place-server.vercel.app/getToysByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  };
  console.log(allToys);

  return (
    <div className='p-3 ' style={{ backgroundImage: "url('https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }} >
      <Title title="Blogs-Kid's Zone"></Title>

      <div className="text-center mt-4 ">
        <h2 className="text-orange-500 text-3xl font-bold mb-4">Our All Toys</h2>
        <p className="p-3">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      </div>
      
      <div className="search-box p-2 text-center">



          <select className='w-full border border-gray-300 rounded px-3 py-2' 
          // value={subCategory} onChange={(e) => setSubCategory(e.target.value)}
           onChange={(e) => selectSortType(e)}
          //  onSelect={() => selectSortType()}
          >
              <option value="">select</option>
              <option value='ascending'>Ascending</option>
              <option value='descending'>Descending</option>
          </select>









          <input onChange={(e)=>setSearchText(e.target.value)} type="text" className="p-1" />{''} <button onClick={handleSearch} className="shadow-xl bg-stone-500 px-3 py-1.5 rounded-md text-white">Search</button>
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
        
          
       
    
      </div>

    </div>
  );
};

export default AllToys;