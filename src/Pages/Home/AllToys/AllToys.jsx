import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard';
import Title from '../../Title/Title';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setAllToys(data));
  }, []);
  console.log(allToys);

  return (
    <div>
         <Title title="Blogs-Kid's Zone"></Title>

      <div className="text-center mt-4">
        <h2 className="text-orange-500 text-3xl font-bold mb-4">Our Toys</h2>
        <p className="p-3">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-9">
        {allToys.map(allToy => (
          <ToyCard key={allToy.id} allToy={allToy} />
        ))}
      </div>
    </div>
    );
};

export default AllToys;